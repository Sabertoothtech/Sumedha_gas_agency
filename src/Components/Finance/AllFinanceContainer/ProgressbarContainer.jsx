import { display } from '@mui/system'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressbarContainer(props) {

    const progressbar_container__main={
        width:"21%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height:"80px",
        borderRadius:"8px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding: "8px",
    }

    const progressbar_container_data={
        display:"flex",
        flexDirection:"column",
      
        }
    return (
        <div style={progressbar_container__main}>
            <div style={progressbar_container_data}>
                <small style={{padding:"0px", marginBottom:"5px"}}>{props.title}</small>
                <strong>95,000</strong>
            </div>
            <ProgressBar isLabelVisible={false} completed={70} maxCompleted={100} height="8px" />
        </div>
    )
}

export default ProgressbarContainer