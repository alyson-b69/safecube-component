import { ResponsiveLine } from '@nivo/line'
import {data} from "./data"
import {StyledChart} from "./NivoChart.style";
import React from "react";



const MyResponsiveLine = () => {

    return (
        <StyledChart>
            <div>
            <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: -30, max: 45, stacked: false, reverse: false }}
            yFormat=" >-.2f"
            enableSlices={'x'}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -40,
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            pointSize={10}
            pointBorderWidth={1}
            colors={['rgba(135, 206, 235, 1)','rgba(126, 178, 121, 1)','rgb(255, 125, 100)', 'rgba(206, 62, 50, 1)', 'rgba(70,130,180,1)']}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 100,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        </div>
        </StyledChart>
    )
}


export default MyResponsiveLine;