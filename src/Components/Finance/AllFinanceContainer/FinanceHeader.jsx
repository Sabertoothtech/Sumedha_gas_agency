import React from 'react'
import Button from '@mui/material/Button';
// import { margin } from '@mui/system';

function FinanceHeader() {
    const dth = {
        width: "95%",
        margin:"auto",
        height:"100px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
    const dhBtn={
        height:"50px",
        padding: "15px 30px",
        borderRadius:"30px",
        fontSize:"13px",
        fontWeight:"500",
        latterSpacing:"1.5px",
        textTransform: "capitalize",
    }

    return (
        <div style={dth} className="DashboardHeader__main">
            <p style={{fontSize:"25px", letterSpacing:"1px"}}>Finance</p>
            
        </div>
    )
}

export default FinanceHeader
