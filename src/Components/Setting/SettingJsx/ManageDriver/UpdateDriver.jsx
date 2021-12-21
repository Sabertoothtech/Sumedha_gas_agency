import React, { useState, useEffect } from 'react'
import './AddDriver.css'
import './UpdateDriver.css'
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import axios from 'axios';
import { addUpdateDriverAPI } from '../../../../Utils/utils'
import { getdriverIDAPI } from '../../../../Utils/utils';



function UpdateDriver({ setShowCon ,setShowupdateCon,udDriverId}) {
    const [adDriverId, setAdDriverId] = useState("")
    const [adname, setAdName] = useState("")
    const [adEmpId, setAdEmpId] = useState("")
    const [adDLN, setAdDLN] = useState("")
    const [adEmail, setAdEmail] = useState("")
    const [adContact, setAdContact] = useState("")
    const [adACN, setAdACN] = useState("")
    const [adAVN, setAdAVN] = useState("")
    const [stadPass, setAdPass] = useState("")

    const [updateDriverData,setUpdateDriverData] = useState([])


    useEffect(() => {

        const config = {
            url: `${getdriverIDAPI}${udDriverId}/`,
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        }
        axios(config)
            .then((res) => {
                const ddname = {
                    duIDc: res.data.id,
                    duNamec:res.data.name,
                    duContactc:res.data.contact_no,
                    duEmpIDc:res.data.employee_id,
                    duACNc:res.data.alternate_contact_no,
                    duAVNc:res.data.alloted_vehicle_no,
                    duEmailc:res.data.email,
                    duDLNc:res.data.driving_licence_no,
                    duPassc:res.data.password,
                };
                setUpdateDriverData(ddname)
            })
           
            .catch((err) => alert(err))
    }, [])


    const addDriverClick = async () => {
        const config = {
            url: addUpdateDriverAPI,
            method: 'PUT',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
            data: {
                "driver_id": adDriverId,
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
            }).catch((err) => alert(err))
    }
    return (
        <div className=" add_driver__main">
            <div className="add_driver__container">
                <div className="add_driver_cancleBtn"><ClearIcon className="add_driver_clearbtn" onClick={() => setShowupdateCon(false)} /></div>
                <strong>Update Driver</strong>
                <div className="add_driver_driverData">
                    <div className="add_driver_left_data">
                        <label htmlFor="">Name:</label>
                        <input onChange={(e) => setAdName(e.target.value)} defaultValue={updateDriverData.duNamec} type="text" />
                        <br /><br />

                        <label htmlFor="">Driver Id:</label>
                        <input onChange={(e) => setAdDriverId(e.target.value)} defaultValue={updateDriverData.duIDc} type="text" />
                        <br /><br />

                        <label htmlFor="">Employee Id:</label>
                        <input onChange={(e) => setAdEmpId(e.target.value)} defaultValue={updateDriverData.duEmpIDc}  type="text" />
                        <br /><br />

                        <label htmlFor="">Driving licence no:</label>
                        <input onChange={(e) => setAdDLN(e.target.value)} defaultValue={updateDriverData.duDLNc} type="text" />
                        <br /><br />

                        <label htmlFor="">Email:</label>
                        <input onChange={(e) => setAdEmail(e.target.value)} defaultValue={updateDriverData.duEmailc} type="text" />
                        <br /><br />
                    </div>
                    <div className="add_driver_right_data">
                        <label htmlFor="">Contact no:</label>
                        <input onChange={(e) => setAdContact(e.target.value)} defaultValue={updateDriverData.duContactc} type="text" />
                        <br /><br />

                        <label htmlFor="">Alternate contact no:</label>
                        <input onChange={(e) => setAdACN(e.target.value)} defaultValue={updateDriverData.duACNc} type="text" />
                        <br /><br />

                        <label htmlFor="">Alloted vehicle no:</label>
                        <input onChange={(e) => setAdAVN(e.target.value)} defaultValue={updateDriverData.duAVNc} type="text" />
                        <br /><br />

                        <label htmlFor="">Password:</label>
                        <input onChange={(e) => setAdPass(e.target.value)}  type="text" />
                        <br /><br /><br />

                        <Button onClick={addDriverClick} className="updatedriverbtn" variant="contained" color="success">
                    Save
                </Button>
                    </div>


                </div>

                

            </div>

        </div>
    )
}

export default UpdateDriver
