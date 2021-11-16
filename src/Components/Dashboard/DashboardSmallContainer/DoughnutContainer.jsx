import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";

function DoughnutContainer() {
    return (
        <div style={{width:"90%", height:"90%", margin:"auto"}}>
            <Doughnut
                data={{
                    datasets: [
                        {
                            barThickness: 30,

                            data: [88, 60, 70, 80, ],

                            backgroundColor: ["#00ced1", "#ff6347", "#7b68ee", "#eee8aa"],

                        },
                    ],
                }}




            />
        </div>
    )
}

export default DoughnutContainer
