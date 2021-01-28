import {StyledTooltip} from "./NivoChart.style";
// import {data} from "./data";
import React from "react";


// @ts-ignore
const NivoTooltip = ({input, data}) => {
    const thisIndex = parseInt(input.point.id.split('.')[1]);
    const chartProperties = document.getElementById('nivoTemp')?.getBoundingClientRect();

    return(
        <StyledTooltip x={input.point.x} y={input.point.y} width={chartProperties?.width ? chartProperties.width : null} height={chartProperties?.height ? chartProperties.height : null}>
            <h4>{input.point.data.x}</h4>
            <p><span style={{backgroundColor: 'rgb(255, 125, 100)'}}/> Température maximum : {Math.round(data[2].data[thisIndex].y*10)/10} °C</p>
            <p><span style={{backgroundColor: 'rgb(126, 178, 121)'}}/> Température moyenne : {Math.round(data[1].data[thisIndex].y*10)/10} °C</p>
            <p><span style={{backgroundColor: 'rgb(135, 206, 235)'}}/> Température minimum : {Math.round(data[0].data[thisIndex].y*10)/10} °C</p>
            <footer><span> </span> Le Havre Port ➔ New York Port</footer>
        </StyledTooltip>
    )
}

export default NivoTooltip