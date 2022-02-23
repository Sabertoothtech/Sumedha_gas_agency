import React,{useEffect,useState} from 'react';
import './UpdateAgency.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import {updateAgencybyidAPI} from '../../../../Utils/utils'

function UpdateAgency({setshowupdateAgency,uagencyId}) {

    const [updateagencydata, setupdateagencydata] = useState({
        agency_name:updateagencydata.agency_name,
        agency_id_data:updateagencydata.agency_id_data,
        gst_no:updateagencydata.gst_no,
        email:updateagencydata.email,
        contact_no:updateagencydata.contact_no,
        address: updateagencydata.address,
        deposited_amount: updateagencydata.deposited_amount,
        cylinder_bought_by_agency_id:updateagencydata.cylinder_bought_by_agency_id,
        cylinder_selling_price_quantity:updateagencydata.cylinder_selling_price_quantity,
        cylinder_bought_by_agency_id:updateagencydata.cylinder_bought_by_agency_id,
        cylinder_selling_price_quantity:updateagencydata.cylinder_selling_price_quantity,
        agency_id:updateagencydata.agency_id
    })

    const getAPIBYID = ()=>{
        const config = {
            url: `${updateAgencybyidAPI}${uagencyId}/`,
            method: "GET",
            headers: {
              Authorization: `Token ${sessionStorage.getItem("token")}`,
            },
          };
          axios(config)
            .then((res) => {
                setupdateagencydata(
                res.data.map((data, idx) => ({
                  agency_name: data.data.agency_details.agency_name,
                  agency_id_data:data.data.agency_id,
                  gst_no:data.data.gst_no,
                  email:data.data.email,
                  contact_no:data.data.contact_no,
                  address:data.data.address,
                  deposited_amount:data.data.deposited_amount,
                  cylinder_bought_by_agency_id:data.data.agency_cylinder_bought.cylinder_type_id.id,
                  cylinder_bought_price_quantity:data.data.agency_cylinder_bought.quantity,
                  cylinder_selling_by_agency_id:data.data.agency_cylinder_selling_price.cylinder_type_id.id,
                  cylinder_selling_price_quantity:data.data.agency_cylinder_selling_price.quantity,
                  agency_id: data.agency_id,
                }))
              );
            })
            .catch((err) => console.log("error"));

    }

  return <div className='update_agency_container'>
      <div className="update_agency_main">
      <div
          style={{
            display: "flex",
            justifyContent: "end",
         
          }}
        >
          <ClearIcon
            style={{ cursor: "pointer" }}
            onClick={() => setshowupdateAgency(false)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}> <strong>Update Agency</strong></div>
         
          <div className="agency_update_all_item">
              <div className="agency_update_left_container">
                    <label htmlFor="">Agency Name</label>
                    <input type="text" name="agency_name" id="" />

                    <label htmlFor="">Agency ID Data</label>
                    <input type="text" name="agency_id_data" id="" />

                    <label htmlFor="">GST NO</label>
                    <input type="text" name="gst_no" id="" />

                    <label htmlFor="">Email</label>
                    <input type="text" name="email" id="" />

                    <label htmlFor="">Contact no</label>
                    <input type="text" name="contact_no" id="" />
              </div>
              <div className="agency_update_right_container">
              <label htmlFor="">Address</label>
                    <input type="text" name="address" id="" />

                    <label htmlFor="">Deposited Amount</label>
                    <input type="text" name="deposited_amount" id="" />

                    <label htmlFor="">Cylinder Bought by Agency</label>
                    <input type="text" name="cylinder_bought_by_agency_id" id="" />

                    <label htmlFor="">Cylinder Selling by Agency</label>
                    <input type="text" name="cylinder_selling_price_id" id="" />

                    <label htmlFor="">Agency Id</label>
                    <input type="text" name="agency_id" id="" />
              </div>
          </div>
        <div style={{display:"flex", justifyContent:"center", }}>  <Button
              style={{padding:"10px 50px"}}
              variant="contained"
              color="success"
            >
              Save
            </Button></div>
      </div>
<ToastContainer/>
  </div>;
}

export default UpdateAgency;
