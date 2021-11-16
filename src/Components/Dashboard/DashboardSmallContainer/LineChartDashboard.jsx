import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";

function LineChartDashboard() {
    return (
        <div style={{width:"90%", height:"90%", margin:"auto"}}>
            <Line
                data={{

                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            barThickness: 30,
                            data: [88, 60, 70, 80, 100, 34, 99],
                            backgroundColor: "blue",

                        },
                    ],
                }}
            />
            
        </div>
    )
}

export default LineChartDashboard
