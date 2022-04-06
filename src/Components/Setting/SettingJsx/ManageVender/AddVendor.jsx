import React, { useState } from "react";
import "./AddVendor.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import axios from "axios";
import { getvendorAPI } from "../../../../Utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddVendor({ setshowAddVendor }) {
  const [postdatavendor, setpostdatavendor] = useState({
    vendor_name: "",
    vendor_id: "",
    gst_no: "",
    email: "",
    contact_no: "",
    address: "",
    vendor_type: "",
    amount_payable: "",
  });

  const inputadd = (event) => {
    const { name, value } = event.target;
    setpostdatavendor((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const vendorPOST = async () => {
    if (
      !postdatavendor.vendor_name ||
      !postdatavendor.vendor_id ||
      !postdatavendor.gst_no ||
      !postdatavendor.email ||
      !postdatavendor.contact_no ||
      !postdatavendor.address ||
      !postdatavendor.vendor_type ||
      !postdatavendor.amount_payable
    ) {
      toast.warn("Kindly fill all detail", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var FormDatas = new FormData();
      FormDatas.append("vendor_name", postdatavendor.vendor_name);
      FormDatas.append("vendor_id", postdatavendor.vendor_id);
      FormDatas.append("gst_no", postdatavendor.gst_no);
      FormDatas.append("email", postdatavendor.email);
      FormDatas.append("contact_no", postdatavendor.contact_no);
      FormDatas.append("address", postdatavendor.address);
      FormDatas.append("vendor_type", postdatavendor.vendor_type);
      FormDatas.append("amount_payable", postdatavendor.amount_payable);

      const config = {
        url: getvendorAPI,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        data: FormDatas,
      };
      await axios(config)
        .then((res) => {
          toast.success(res.data, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <div className="post_vendor_container">
      <div className="post_vendor_main">
        <div
          onClick={() => setshowAddVendor(false)}
          style={{ display: "flex", justifyContent: "end", padding: "10px" }}
        >
          <ClearIcon />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>Add Vendor</strong>
        </div>
        <div className="container_post_all_item">
          <div className="left_container">
            <label htmlFor="">Vendoe Name</label>
            <input onChange={inputadd} type="text" name="vendor_name" id="" />

            <label htmlFor="">Vendor ID</label>
            <input onChange={inputadd} type="text" name="vendor_id" id="" />

            <label htmlFor="">GST</label>
            <input onChange={inputadd} type="text" name="gst_no" id="" />

            <label htmlFor="">Email</label>
            <input onChange={inputadd} type="text" name="email" id="" />
          </div>
          <div className="right_container">
            <label htmlFor="">Contact NO</label>
            <input onChange={inputadd} type="text" name="contact_no" id="" />

            <label htmlFor="">Address</label>
            <input onChange={inputadd} type="text" name="address" id="" />

            <label htmlFor="">Vendor Type</label>
            <input onChange={inputadd} type="text" name="vendor_type" id="" />

            <label htmlFor="">Amount Payable</label>
            <input
              onChange={inputadd}
              type="text"
              name="amount_payable"
              id=""
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              padding: "15px 50px",
              marginTop: "30px",
              display: "block",
            }}
            variant="contained"
            color="success"
            onClick={vendorPOST}
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddVendor;
