import React,{useState} from 'react'
import './ManageDriver.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Button from '@mui/material/Button';
import AddDriver from './AddDriver';


function ManageDriver() {
    const [showAddDriver,setshowAddDriver] = useState(false)

    const addDriverClick = () =>{
        setshowAddDriver(true)
        
    }
    return (
        <div className="manage_driver__main">

            <strong>Manage Driver</strong>
            <div className="manage_driver_name_icon">
                <small >RD Agency</small>
                <div className="manage_icon">
                    <EditIcon />
                    <DeleteIcon />
                </div>

            </div>

            <div className="manage_driver_name_icon">
                <small >RD Agency</small>
                <div className="manage_icon">
                    <EditIcon />
                    <DeleteIcon />
                </div>

            </div>

            <div className="manage_driver_name_icon">
                <small >RD Agency</small>
                <div className="manage_icon">
                    <EditIcon />
                    <DeleteIcon />
                </div>

            </div>
            
           
            <div className="manage_button">
            <Button onClick={addDriverClick} variant="contained">Add Driver</Button>

            </div>
            {showAddDriver?<AddDriver setShowCon={setshowAddDriver} />:""}
            

        </div>
    )
}


export default ManageDriver
