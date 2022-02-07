import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {updateEccessoriesAPI} from '../../Utils/utils'


function UpdateAccessories({ setUpdateAProduct,idForUpdate }) {

  const [updateAccessData, setUpdateAccessData] = useState([])
  const [name, setname] =useState("")
  const [quantity, setquantity] =useState("")
  const [price, setprice] =useState("")
  const [file, setfile] =useState("")
  const [id, setid] =useState("")
 
  const accessories__main = {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    width: "400px",
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
    paddingLeft:"5px"
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
       
          setid(response.data.id)
          setname(response.data.product_name)
          setquantity(response.data.quantity)
          setprice(response.data.price)
          setfile(response.data.product_image)
        
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }, [])


  const ApiCallSave = async() => {
    var FormDatas = new FormData();
    FormDatas.append("product_name",name);
    FormDatas.append("quantity",quantity );
    FormDatas.append("price",price );
    FormDatas.append("product_image",file);
    FormDatas.append("accessories_id",id );
    await axios({
      method: "PUT",
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
          <label htmlFor="">Product id:</label>
          <input
            style={input_all}
            type="text"
            value={id} 
            // onChange={(e)=> setUpdateAccessData(e.target.value)}
          />
        </div>
        
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Product name:</label>
          <input
            style={input_all}
            type="text"
            defaultValue={name} 
            onChange={(e)=> {setname(e.target.value)}}
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Ouantity: </label>
          <input
            style={input_all}
            type="text"
            defaultValue={quantity}
            onChange={(e)=> setquantity(e.target.value)}
          />
        </div>
        <div style={{ margin: "auto", width: "90%" }}>
          <label htmlFor="">Price: </label>
          <input
            style={input_all}
            type="text"
            defaultValue={price}
            onChange={(e)=> setprice(e.target.value)}
          />
        </div>
        <div style={{ margin: "auto", width: "90%", outline: "2px red" }}>
          <label htmlFor="">Product Image:{updateAccessData.product_image}</label>
          <input
            style={input_all}
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
            defaultValue={file}
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
