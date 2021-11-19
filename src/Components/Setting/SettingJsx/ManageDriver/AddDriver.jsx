import React, { useState } from 'react'
import './AddDriver.css'
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import axios from 'axios';
import { addDriverAPI } from '../../../../Utils/utils'



function AddDriver({ setShowCon }) {
    const [adname, setAdName] = useState("")
    const [adEmpId, setAdEmpId] = useState("")
    const [adDLN, setAdDLN] = useState("")
    const [adEmail, setAdEmail] = useState("")
    const [adContact, setAdContact] = useState("")
    const [adACN, setAdACN] = useState("")
    const [adAVN, setAdAVN] = useState("")
    const [stadPass, setAdPass] = useState("")


    const addDriverClick = async () => {
        const config = {
            url: addDriverAPI,
            method: 'POST',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            data: {
                "name": adname,
                "contact_no": adContact,
                "employee_id": adEmpId,
                "alternate_contact_no": adACN,
                "driving_licence_no": adDLN,
                "alloted_vehicle_no": adAVN,
                "email": adEmail,
                "password": stadPass


            }
        }
        await axios(config)
            .then((res) => {
                alert(res.data)
            }).catch((err) => alert("Something is wrong...Your Email should be unique"))
    }
    return (
        <div className=" add_driver__main">
            <div className="add_driver__container">
                <div className="add_driver_cancleBtn"><ClearIcon className="add_driver_clearbtn" onClick={() => setShowCon(false)} /></div>
                 
                <div className="add_driver_driverData">
                    <div className="add_driver_left_data">
                        <label htmlFor="">Name:</label>
                        <input onChange={(e) => setAdName(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Employee ID:</label>
                        <input onChange={(e) => setAdEmpId(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Driving licence no:</label>
                        <input onChange={(e) => setAdDLN(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Email:</label>
                        <input onChange={(e) => setAdEmail(e.target.value)} type="text" />
                        <br /><br />
                    </div>
                    <div className="add_driver_right_data">
                        <label htmlFor="">Contact no:</label>
                        <input onChange={(e) => setAdContact(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Alternate contact no:</label>
                        <input onChange={(e) => setAdACN(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Alloted vehicle no:</label>
                        <input onChange={(e) => setAdAVN(e.target.value)} type="text" />
                        <br /><br />

                        <label htmlFor="">Password:</label>
                        <input onChange={(e) => setAdPass(e.target.value)} type="text" />
                        <br /><br />
                    </div>


                </div>

                <div className="add_driver_button"><Button onClick={addDriverClick} className="adddriverbtn" variant="contained" color="success">
                    Save
                </Button></div>

            </div>

        </div>
    )
}

export default AddDriver
