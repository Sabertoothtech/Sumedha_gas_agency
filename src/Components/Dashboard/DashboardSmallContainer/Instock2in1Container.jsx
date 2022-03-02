import React from 'react'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
function Instock2in1Container(props) {
    const instock2in1container__main= {
        width:"300px",
        height:"100px",
        display:"flex",
        justifyContent:"start",
        marginTop:"10px",
        justifyContent:"center",
        alignItems:"center",
    } 
    const instock2in1container__circle={
        width:"50px",
        height:"50px",
        // border:"2px solid hotpink",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight:"20px",
        backgroundColor:props.bgcolor
    } 
    const instock2in1container__text={
        
    }
    return (
        <div style={instock2in1container__main}>
            <div style={instock2in1container__circle}>
                <LocalGasStationIcon style={{color:"white"}}/>
            </div>
            <div style={instock2in1container__text}>
                <p>Filled Cylinder</p>
                <p>600</p>
            </div>
        </div>
    )
}

export default Instock2in1Container
