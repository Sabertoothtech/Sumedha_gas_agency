
import React from 'react'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
function DataCircleGraph(props) {

    const progressbar_container__main={
        width:"21%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height:"80px",
        borderRadius:"8px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding: "8px",
    }

    const progressbar_container_data={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%"
      
        }

    const data_circle_graph={
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        // border:"2px solid red",
        display:"flex",
        alignItems:"center",
        justifyContent:"center ",
        backgroundColor:props.bgcolor,
        color:"white"
    }

    const progressbar_container_smalldata={
        display:"flex",
        flexDirection:"column",
    }
    return (
        <div style={progressbar_container__main}>
            <div style={progressbar_container_data}>
                <small style={{padding:"0px",margin:"0px" }}>hi</small>
                <div style={progressbar_container_smalldata}>
                    <small style={{padding:"0px",margin:"0px" }}>+18%</small>
                    <small style={{padding:"0px",margin:"0px", fontSize:"10px" }}>from last month</small>
                </div>
            </div>
            <div style={data_circle_graph}>
               <props.icon/>
            </div>
        </div>
    )
}

export default DataCircleGraph
