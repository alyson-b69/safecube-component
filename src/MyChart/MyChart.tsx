import {Line} from "react-chartjs-2";
import React, {Dispatch,  SetStateAction} from "react";
import { StyledChart } from "./MyChart.style";
import MyChartLegend from "./MyChartLegend";
import {ChartData, ChartOptions, ChartTooltipItem, ChartTooltipModel} from "chart.js";
import moment from "moment";
import {getData} from "../NivoChart/data";


const myRedBackground: string = "rgb(255,99,71,0.3)";
const myRed: string = "rgba(206, 62, 50, 1)";

const myOrange: string = "rgb(255, 125, 100)";
const myGreen: string = "rgba(126, 178, 121, 1)";
const myBlue: string = "rgba(135, 206, 235, 1)";
const myBlueBackground: string = "rgba(173, 216, 230, 0.3)";
const myDarkBlue: string = "rgba(70,130,180,1)";
const myTransparent: string = "rgba(0,0,0,0)";

interface Props {
  number: number,
  setNumber: Dispatch<SetStateAction<number>>,
}



const MyChart: React.FC<Props> = ({number, setNumber, children}) => {

  const labels: string[] = []

  for(let i = number; i >= 0; i--){
    let time = moment().subtract(i, 'days').format("DD/MM - hh:mm");
    labels.push(time)
  }

  const maxTemp: number = 31;
  const minTemp: number = 0;

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const minn: number[] = labels.map(() => minTemp);
  const maxx: number[] = labels.map(() => maxTemp);

  const dataMax: number[] = labels.map(() => getRandomArbitrary(20, 45));
  const dataMin: number[] = labels.map(() => getRandomArbitrary(-20, 20));
  const dataAverage: number[] = labels.map(
      (item, index) => (dataMax[index] + dataMin[index]) / 2
  );

  const dataMinColours: string[] = dataMin.map((value) =>
      value < minTemp ? myDarkBlue : value > maxTemp ? myRed : myBlue
  );

  const dataMaxColours: string[] = dataMax.map((value) =>
      value < minTemp ? myDarkBlue : value > maxTemp ? myRed : myOrange
  );

  const dataAverageColours: string[] = dataAverage.map((value) =>
      value < minTemp ? myDarkBlue : value > maxTemp ? myRed : myGreen
  );

  const data: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Min",
        data: minn,
        fill: "+1",
        borderDash: [8, 8, 8, 8, 8, 8],
        pointStyle: "dash",
        backgroundColor: "#ffffff",
        borderColor: myDarkBlue,
        borderWidth: 2
      },
      {
        label: "Max",
        data: maxx,
        fill: "+1",
        borderDash: [8, 8, 8, 8, 8, 8],
        pointStyle: "dash",
        backgroundColor: myTransparent,
        borderColor: myRed,
        borderWidth: 2
      },

      {
        label: "TempMax",
        data: dataMax,
        fill: "-1",
        pointBorderWidth: 2,
        pointBackgroundColor: dataMaxColours,
        pointBorderColor: dataMaxColours,
        backgroundColor: myRedBackground,
        borderColor: myOrange,
        borderWidth: 2,
        pointHoverRadius: 5
      },
      {
        label: "TempAverage",
        data: dataAverage,
        fill: false,
        pointBorderWidth: 2,
        pointBorderColor: dataAverageColours,
        pointBackgroundColor: dataAverageColours,
        borderColor: myGreen,
        borderWidth: 2,
        pointHoverRadius: 5
      },
      {
        label: "TempMin",
        data: dataMin,
        fill: "-4",
        pointBorderWidth: 2,
        pointBackgroundColor: dataMinColours,
        pointBorderColor: dataMinColours,
        backgroundColor: myBlueBackground,
        borderColor: myBlue,
        borderWidth: 2,
        pointHoverRadius: 5
      }
    ]
  };

  const options: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: { display: false },
          ticks: {
            autoSkip: false,
            maxRotation: 30,
            minRotation: 30,
            callback: function (label, index, labels) {
              let remainder = (index % 4) / 100;

              if (remainder === 0) {
                return label;
              } else {
                return "";
              }
            }
          }
        }
      ],
      yAxes: [
        {
          gridLines: { display: true, z: 1 },
          ticks: {
            suggestedMin: -30,
            suggestedMax: 50
          }
        }
      ]
    },
    tooltips: {
      enabled: false,
      mode: "index",
      position: "nearest",
      custom: function (tooltipModel: ChartTooltipModel) {
        // Tooltip Element
        let tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.id = "chartjs-tooltip";
          tooltipEl.innerHTML = "<table></table>";
          document.body.appendChild(tooltipEl);
        }

        const yAlign = tooltipModel.yAlign;
        const xAlign = tooltipModel.xAlign;

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = "0";
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove(
            "above",
            "below",
            "no-transform",
            "top",
            "center",
            "bottom",
            "right",
            "left"
        );

        if (tooltipModel.yAlign || tooltipModel.xAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
          tooltipEl.classList.add(tooltipModel.xAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem: any) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          let titleLines = tooltipModel.title || [];
          let bodyLines = tooltipModel.body.map(getBody);
          let footerLines = tooltipModel.footer;

          let innerHtml = "<thead>";

          titleLines.forEach(function (title:string) {
            innerHtml += "<tr><th>" + title + "</th></tr>";
          });
          innerHtml += "</thead><tbody>";

          bodyLines.forEach(function (body:any, i:number) {
            if (body.length) {
              let colors = tooltipModel.labelColors[i];

              // @ts-ignore
              let style = "background:" + colors.backgroundColor;
              // @ts-ignore
              style += "; border-color:" + colors.borderColor;
              style += "; border-width: 2px";
              style += "; content: ' '; display: inline-block; margin-right: 2px";
              style += "; width: 10px; height: 10px";
              let span = '<span style="' + style + '"> </span>';
              innerHtml += "<tr><td>" + span + body + "</td></tr>";
            }
          });

          let icon =
              '<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-location-1.png" width="13px" >';
          innerHtml +=
              "</tbody><tfoot><tr><td style='font-weight: bold'>" +
              icon +
              footerLines +
              "</td></tr></tfoot>";

          let tableRoot = tooltipEl.querySelector("table");

          if(tableRoot){
            tableRoot.innerHTML = innerHtml;
          }

        }

        // Tooltip height and width
        const { height, width } = tooltipEl.getBoundingClientRect();
        // Chart canvas positions

        // @ts-ignore
        const positionY = this._chart.canvas.offsetTop;
        // @ts-ignore
        const positionX = this._chart.canvas.offsetLeft;

        // Carets
        const caretY = tooltipModel.caretY;
        const caretX = tooltipModel.caretX;

        // Final coordinates
        let top = positionY + caretY - height;
        let left = positionX + caretX - width / 2;
        let space = 8; // This for making space between the caret and the element.

        // yAlign could be: `top`, `bottom`, `center`
        if (yAlign === "top") {
          top += height + space;
        } else if (yAlign === "center") {
          top += height / 2;
        } else if (yAlign === "bottom") {
          top -= space;
        }
        // xAlign could be: `left`, `center`, `right`
        if (xAlign === "left") {
          left = left + width / 2 - tooltipModel.xPadding - space / 2;
          if (yAlign === "center") {
            left = left + space * 2;
          }
        } else if (xAlign === "right") {
          left -= width / 2;
          if (yAlign === "center") {
            left = left - space;
          } else {
            left += space;
          }
        }

        // Display, position, and set styles for font
        tooltipEl.style.opacity = "1";
        tooltipEl.style.position = "absolute";
        // Left and right
        tooltipEl.style.top = `${top}px`;
        tooltipEl.style.left = `${left}px`;
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding =
            tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
        tooltipEl.style.pointerEvents = "none";
        tooltipEl.style.pointerEvents = "none";
        tooltipEl.style.background = "#ffffff";
        tooltipEl.style.borderRadius = "5px";
        tooltipEl.style.border = "solid 2px #7EB279";
      },
      callbacks: {
        title: function (tooltipItem: ChartTooltipItem[], data) {
          let thisIndex = tooltipItem[0].index;
          if(data && data.labels && data.labels.length && thisIndex && thisIndex >= 0) {
            let newTitle = data.labels[thisIndex];
            if(typeof newTitle === "string"){
              return newTitle;
            } else {
              return "";
            }
          } else {
            return ""
          }
        },
        label: function (tooltipItem: ChartTooltipItem, data) {
          let thisIndex = tooltipItem?.datasetIndex
          if(data && data.datasets && thisIndex && thisIndex >= 0 ){
            let label =
                data.datasets[thisIndex].label === "TempMax"
                    ? "Maximum temperature"
                    : data.datasets[thisIndex].label === "TempMin"
                    ? "Minimum temperature"
                    : data.datasets[thisIndex].label === "TempAverage"
                        ? "Average temperature"
                        : null;

            if (label && tooltipItem.yLabel && typeof tooltipItem.yLabel === "number") {
              label += " : ";
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              label += " °C";
              return label
            } else {
              return ""
            }
          }
          else {
            return ""
          }

        },
        footer: function () {
          let footer = " Le Havre Port ➔ New York Port";
          return footer;
        }
      },
      backgroundColor: "#ffffff",
      titleFontSize: 14,
      titleFontColor: "#7EB279",
      titleMarginBottom: 10,
      bodyFontColor: "#000000",
      bodyFontSize: 12,
      footerFontStyle: "normal",
      footerFontColor: "#000",
      footerMarginTop: 10,
      borderColor: "#7EB279",
      borderWidth: 2
    }
  };


  return (
    <StyledChart>
      <MyChartLegend />
      <div>
        <Line data={data} options={options} height={100 - 20}  />
      </div>
    </StyledChart>
  );
};

export default MyChart;
