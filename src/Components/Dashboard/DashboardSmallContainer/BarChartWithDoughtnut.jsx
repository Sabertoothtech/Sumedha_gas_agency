import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";

function BarChartWithDoughtnut() {
    return (
        <div style={{width:"90%", height:"90%", margin:"auto"}}>
            <Bar
                data={{

                    labels: ["May", "June", "July", "Aug", "Sep", "Oct"],
                    datasets: [
                        {
                            barThickness: 30,
                            data: [88, 60, 70, 80, 100, 34, 99],
                            backgroundColor: ["#00ced1","#eee8aa"],

                        },
                    ],
                }}
            />

        </div>
    )
}

export default BarChartWithDoughtnut
