import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {updateEccessoriesAPI} from '../../Utils/utils'


function UpdateAccessories({ setUpdateAProduct,idForUpdate }) {

  const [updateAccessData, setUpdateAccessData] = useState([])
 
  const accessories__main = {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    width: "350px",
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
    border: "2px solid gray",
    display: "flex",
  };
  const accessories_icon = {
    display: "flex",
    flexDirection: "column",
  };


  useEffect(() => {

    axios({
      method: "GET",
      url: `${updateEccessoriesAPI}${idForUpdate}/`,
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
      .then(function (response) {
        setUpdateAccessData({
          product_name:response.data.product_name,
          quantity:response.data.quantity,
          price:response.data.price,
          product_image:response.data.product_image,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }, [])


  const ApiCallSave = () => {
    var FormDatas = new FormData();
    // FormDatas.append("product_name", proName);
    // FormDatas.append("quantity", proOunatity);
    // FormDatas.append("price", proPrice);
    // FormDatas.append("product_image", proImage);

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
        alert(response.data)
      })
      .catch(function (error) {
        alert(error.response.data[0].Message +" All field Are Required");
      });
  };


  return (
    <div style={accessories__main}>
      <div style={accessories__container}>
        <div style={accessories_icon}>
          <ClearIcon
            onClick={() => setUpdateAProduct(false)}
            style={{ marginLeft: "auto" }}
          />
          <strong
            style={{ margin: "auto", fontSize: "13px", fontWeight: "700" }}
          >
            Update Product
          </strong>
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Product Name:</label>
          <input
            style={input_all}
            type="text"
            defaultValue={updateAccessData.product_name} 
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Ouantity: </label>
          <input
            style={input_all}
            type="text"
            defaultValue={updateAccessData.quantity}
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Price: </label>
          <input
            style={input_all}
            type="text"
            defaultValue={updateAccessData.price}
          />
        </div>
        <div style={{ margin: "auto", width: "90%", outline: "2px red" }}>
          <label htmlFor="">Product Image:{updateAccessData.product_image}</label>
          <input
            style={input_all}
            type="file"
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
    </div>
  );
}

export default UpdateAccessories;
