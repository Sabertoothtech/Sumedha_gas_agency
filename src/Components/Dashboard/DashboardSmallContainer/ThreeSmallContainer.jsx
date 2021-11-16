import { height } from '@mui/system'
import React from 'react'
import MovingIcon from '@mui/icons-material/Moving';


function ThreeSmallContainer({trandingicon,bgcolor}) {
    const tscm = {
        width: "250px",
        height: "100px",
        borderRadius: "15px",
        display:"flex",
        justifyContent: 'space-between',
        alignItems:"center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "3px 15px ",
        

    }
    const three_small_container_icon={
        width:"70px",
        height:"70px",
        borderRadius:"50%",
        backgroundColor:bgcolor,
        display:"flex",
        justifyContent: 'center',
        alignItems:"center"

    }
    const three_small_container_text={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%"
    }
    return (
        <div style={tscm} className="three_small_container__main">
            <div style={ three_small_container_text }>
                <small style={{margin:"0px",padding:"0px", marginTop:"0px"}}>rtgtrg</small>
                <span style={{margin:"0px",padding:"0px"}}>ggg</span>
                <div className="three_small_container_row_text">
                    <small style={{margin:"0px",padding:"0px", marginTop:"0px"}}>+3.34% </small>
                    <small style={{margin:"0px",padding:"0px", marginTop:"0px"}}>since last month</small>
                </div>
            </div>
            <div style={three_small_container_icon}>
                <MovingIcon style={{color:"white"}} />

            </div>
        </div>
    )
}

export default ThreeSmallContainer
