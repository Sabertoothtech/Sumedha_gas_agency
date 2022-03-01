import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function AccessoriesAddProduct({ setAddProduct }) {
  const matches = useMediaQuery('(max-width:500px)');
  const [proName, setProName] = useState("");
  const [proOunatity, setProOunatity] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proImage, setProImage] = useState("");
  const accessories__main = {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    width: matches?"90%":"400px",
    height: "450px",
    borderRadius: "10px",
    marginTop: "15px",
    padding: "10px",
  };
  const accessories__container = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const input_all = {
    margin: "0px",
    padding: "0px",
    border: "1px solid gray",
    display: "flex",
    padding: "8px 10px",
    borderRadius: "5px",
    outline:"none",
    width:"100%"
  };
  const label_all = {
    fontSize:"small"
  };
  const accessories_icon = {
    display: "flex",
    flexDirection: "column",
  };

  const ApiCallSave = () => {
    var FormDatas = new FormData();
    FormDatas.append("product_name", proName);
    FormDatas.append("quantity", proOunatity);
    FormDatas.append("price", proPrice);
    FormDatas.append("product_image", proImage);

    axios({
      method: "post",
      url: "http://45.79.121.178:8000/accessories/",

      data: FormDatas,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
      .then(function (response) {
        toast.success(response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }).catch(err=> toast.error('Something went wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
  };
  return (
    <div style={accessories__main}>
      <div style={accessories__container}>
        <div style={accessories_icon}>
          <ClearIcon
            onClick={() => setAddProduct(false)}
            style={{ marginLeft: "auto" }}
          />
          <strong
            style={{ margin: "auto", fontSize: "13px", fontWeight: "700" }}
          >
            New Product
          </strong>
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label style={label_all} htmlFor="">Product Name: </label>
          <input
            onChange={(e) => setProName(e.target.value)}
            style={input_all}
            type="text"
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label style={label_all} htmlFor="">Ouantity: </label>
          <input
            onChange={(e) => setProOunatity(e.target.value)}
            style={input_all}
            type="text"
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label style={label_all} htmlFor="">Price: </label>
          <input
            onChange={(e) => setProPrice(e.target.value)}
            style={input_all}
            type="text"
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label style={label_all} htmlFor="">Product Image: </label>
          <input
            style={input_all}
            type="file"
            onChange={(e) => setProImage(e.target.files[0])}
          />
        </div>
        <Button
          onClick={ApiCallSave}
          style={{ width: "50%", margin: "auto" }}
          variant="contained"
          color="success"
        >
          Save
        </Button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AccessoriesAddProduct;
