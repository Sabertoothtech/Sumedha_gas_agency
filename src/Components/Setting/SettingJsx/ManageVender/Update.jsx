import React, { useEffect, useState } from "react";
import "./Update.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { getvendot_by_IDAPi } from "../../../../Utils/utils";
import { getvendorAPI } from "../../../../Utils/utils";

function Update({ vendorupdateID, setshowUpdateVendor }) {
  const [updatedatavendor, setupdatedatavendor] = useState({
    id: "",
    name: "",
    vendor_id: "",
    gstno: "",
    email: "",
    contactno: "",
    address: "",
    amount_payable: "",
    vendor_type: "",
  });

  const get_by_API = async () => {
    const config = {
      url: `${getvendot_by_IDAPi}${vendorupdateID}/`,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        setupdatedatavendor(
         {
          id:res.data.id,
          vendor_name:res.data.vendor_name,
          vendor_id:res.data.vendor_id,
          gst_no:res.data.gst_no,
          email:res.data.email,
          contact_no:res.data.contact_no,
          address:res.data.address,
          amount_payable:res.data.amount_payable,
          vendor_type:res.data.vendor_type
         }
        )
      })
      .catch((err) => {
        // alert("err");
      });
  };

  const updateAPI = async () => {
    var FormDatas = new FormData();
    FormDatas.append("vendor_name",updatedatavendor.vendor_name);
    FormDatas.append("vendor_id",updatedatavendor.vendor_id );
    FormDatas.append("gst_no",updatedatavendor.gst_no);
    FormDatas.append("email",updatedatavendor.email);
    FormDatas.append("contact_no",updatedatavendor.contact_no);
    FormDatas.append("address",updatedatavendor.address );
    FormDatas.append("vendor_type",updatedatavendor.vendor_type);
    FormDatas.append("amount_payable",updatedatavendor.amount_payable);
    FormDatas.append("id",updatedatavendor.id);
    const config = {
      url: getvendorAPI,
      // url:"http://45.79.121.178:8000/vendor/",
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data:FormDatas
    };
    await axios(config)
      .then((res) => {
        toast.success("Sucuss", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      .catch((err) => {
        
      });
  };

  useEffect(() => {
    get_by_API();
  }, []);


  const changeValue = (event) =>{
    const {name, value} = event.target;
    setupdatedatavendor((preValue)=>{
      return{
        ...preValue,
      [name]:value
      }
    })

  }
  
  return (
    <div className="update_vendor_container">
      <div className="update_vendor_item">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "10px",
            paddingTop: "10px",
          }}
        >
          <ClearIcon
            style={{ cursor: "pointer" }}
            onClick={() => setshowUpdateVendor(false)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>Edit Vendor</strong>
        </div>
        <div className="update_vend0r_all_info">
          <div className="left_vendor_update">
            <label htmlFor="">Vendor Name</label>
            <input onChange={changeValue} name="vendor_name" defaultValue={updatedatavendor.vendor_name} type="text" />

            <label htmlFor="">Vendor ID</label>
            <input onChange={changeValue} name="vendor_id" defaultValue={updatedatavendor.vendor_id} type="text" />

            <label htmlFor="">Vendor Type</label>
            <input onChange={changeValue} name="vendor_type" defaultValue={updatedatavendor.vendor_type} type="text" />

            <label htmlFor="">GST NO</label>
            <input onChange={changeValue} name="gst_no" defaultValue={updatedatavendor.gst_no} type="text" />

            <label htmlFor="">Email</label>
            <input onChange={changeValue} name="email" defaultValue={updatedatavendor.email} type="text" />
          </div>
          <div className="right_vendor_update">
            <label htmlFor="">Contact No</label>
            <input onChange={changeValue} name="contact_no" defaultValue={updatedatavendor.contact_no} type="text" />

            <label htmlFor="">Address</label>
            <input onChange={changeValue} name="address" defaultValue={updatedatavendor.address} type="text" />

            <label htmlFor="">Amount Payable</label>
            <input onChange={changeValue} name="amount_payable" defaultValue={updatedatavendor.amount_payable} type="text" />

            <label htmlFor="">ID </label>
            <input onChange={changeValue} name="id" value={updatedatavendor.id} type="text" />
            <Button
              onClick={updateAPI}
              style={{ width: "350px", marginTop: "35px", display: "block" }}
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Update;
