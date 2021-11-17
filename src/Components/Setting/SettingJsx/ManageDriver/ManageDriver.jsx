import React, { useState, useEffect } from 'react'
import './ManageDriver.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Button from '@mui/material/Button';
import { addDriverAPI } from '../../../../Utils/utils'


function ManageDriver(props) {

    const [showDriverName, setShowDriverName] = useState([])

    const addDriverClick = () => {
        props.setdriverPopUp(true)
    }

    useEffect(() => {
        const config = {
            url: addDriverAPI,
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        }
        axios(config)
            .then((res) => {
                // console.log(res.data[18].name)
                const ddname = res.data.map((dname, idx) => ({
                    drivername: dname.name
                }))
                setShowDriverName(ddname)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="manage_driver__main">
            <strong>Manage Driver</strong>
            {
                showDriverName.map((name, id) => (
                    <div className="manage_driver_name_icon">
                        <small >{name.drivername}</small>
                        <div className="manage_icon">
                            <EditIcon onClick={()=>props.setupdatePopUp(true)} />
                            <DeleteIcon />
                        </div>

                    </div>

                ))
            }
            <div className="manage_button">
                <Button onClick={addDriverClick} variant="contained">Add Driver</Button>  
            </div>
        </div>
    )
}


export default ManageDriver
