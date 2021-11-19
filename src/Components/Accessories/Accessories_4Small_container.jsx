
import React,{useEffect} from 'react'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { getEccessoriesAPI } from '../../Utils/utils';

function Accessories_4Small_container(props) {

    const {proname, quantity, image,price} =props

    const accessories_4_small__main = {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        width: "400px",
        height: "100px",
        marginTop: "20px",
        borderRadius: "10px",
        padding: "10px"
    }

    const accessories_4_small_Editicon = {
        width: "100%",
        display: "flex",
        justifyContent: "end",
    }
    const accessories_4_small_Item = {
        width: "100%",
        // border: "2px solid red",
        display: "flex",
        alignItems: "center",

    }

    const accessories_4_small_image = {
        marginLeft: "30px",
        marginRight: "30px",
        display: "flex",
    }
    const accessories_4_small_data = {
        display: "flex",
        flexDirection: "column",
    }
    return (
        <div style={accessories_4_small__main}>
            <div style={accessories_4_small_Editicon}><EditIcon style={{ color: "gray", fontSize: "20px" }} /></div>
            <div style={accessories_4_small_Item}>
                <img style={accessories_4_small_image} src="{image}" alt="Image" />
                <div style={accessories_4_small_data}>
                    <span style={{margin:"0px", padding:"0px"}}>{proname}</span>
                    <small style={{margin:"0px", padding:"0px"}}>Price: Rs{price}</small>
                    <small style={{margin:"0px", padding:"0px"}}>In stock: {quantity}</small>

                </div>
            </div>
        </div>
    )
}

export default Accessories_4Small_container
