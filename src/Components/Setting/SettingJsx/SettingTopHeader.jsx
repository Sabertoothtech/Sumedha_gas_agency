import { height } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';

function SettingTopHeader({pageName}) {
    
    const sthc = {
        width:"95%",
        margin:"auto",
        height:"100px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
    return (
        <div style={sthc} className="setting_top_header__main">
            <p>{pageName}</p>
            
        </div>
    )
}

export default SettingTopHeader
