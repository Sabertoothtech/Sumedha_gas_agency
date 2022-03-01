import { height } from '@mui/system'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function ThreeSmallContainer({trandingicon,bgcolor,color,data,name,kg,kg1,data1}) {
    const matches = useMediaQuery('(max-width:1200px)');
    const tscm = {
        minWidth:matches?"200px": "230px",
        height: "90px",
        borderRadius: "15px",
        display:"flex",
        justifyContent: 'space-between',
        alignItems:"center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "3px 15px ",
        margin:"5px"

    }
    const three_small_container_icon={
        width:"50px",
        height:"50px",
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
                <small style={{margin:"0px",padding:"0px", marginTop:"0px",fontSize:"13px", fontWeight:"350"}}>{name}</small>
                <span style={{margin:"0px",padding:"0px"}}>{data+data1}</span>
                <div className="three_small_container_row_text">
                    <small style={{margin:"0px",padding:"0px",  fontSize:"10px", fontWeight:"350",color:color}}>{kg}</small>
                    <small style={{margin:"0px",padding:"0px", marginRight:"10px", fontSize:"10px", fontWeight:"350"}}>{data}</small>
                    <small style={{margin:"0px",padding:"0px",  fontSize:"10px", fontWeight:"350",color:color}}>{kg1}</small>
                    <small style={{margin:"0px",padding:"0px", marginTop:"0px", fontSize:"10px", fontWeight:"350"}}>{data1}</small>
                </div>
            </div>
            <div style={three_small_container_icon}>
                <LocalGasStationIcon style={{color:"white"}} />

            </div>
        </div>
    )
}

export default ThreeSmallContainer
