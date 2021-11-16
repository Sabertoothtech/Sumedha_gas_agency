import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";

function StatisticsContainer() {
    const statistics_container__main = {
        width: "97%",
        height:"250px",
        margin: "auto",
        marginTop: "10px",
        paddingBottom:"20px"

    }
    return (
        <div style={statistics_container__main}>
            <Bar
                data={{

                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    datasets: [
                        {
                            barThickness: 30,
                            data: [88, 60, 70, 80, 100, 34, 99],
                            backgroundColor: ["#00ced1", "#7b68ee"]

                        },
                    ],
                }}
                width="1000"
                options={{
                    maintainAspectRatio: false,
                    scales: {

                        yAxes: [{
                            grid: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        labels: {
                            fontSize: 15,
                        },
                    },
                }}
            />
        </div>
    )
}

export default StatisticsContainer
