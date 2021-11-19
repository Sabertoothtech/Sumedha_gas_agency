import React from 'react'
import Button from '@mui/material/Button';
// import { margin } from '@mui/system';

function DashboardHeader({setAddProduct}) {
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
        padding: "20px 20px",
        borderRadius:"30px",
        fontSize:"13px",
        fontWeight:"500",
        latterSpacing:"2px",
        textTransform: "capitalize",
    }

    return (
        <div style={dth} className="DashboardHeader__main">
            <p style={{fontSize:"25px", letterSpacing:"1px"}}>Accessories</p>
            <Button style={dhBtn} onClick={()=> setAddProduct(true)} className="dhBtn" variant="contained" color="success">
                +Add Product
            </Button>
        </div>
    )
}

export default DashboardHeader
