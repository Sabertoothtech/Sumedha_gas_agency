import { borderRadius } from "@mui/system";
import React,{useState} from "react";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import {postAPIFilleDCylinder} from '../../../Utils/utils'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AddEntryFilledCylinder({ setShowAddEntryFilledCylinder }) {
  const [increDecre, setincreDecre] = useState(1)
  const [postDataFilled, setpostDataFilled] = useState(1)
  const add_entry_filled_cylinder__main = {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
  };

  const postAPI = async() =>{
    var FormDatas = new FormData();
    FormDatas.append("filled_cylinder_quantity",JSON.stringify([{"cylinder_type_id": postDataFilled,"quantity": increDecre}]));
    // FormDatas.append();
    

    await axios({
      method: "post",
      url: postAPIFilleDCylinder,

      data: FormDatas,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    }).then(res=>{
      toast.success(res.data, {
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

  }

  const add_entry_filled_cylinder__container = {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    width: "450px",
    height: "350px",
    marginTop: "100px",
    borderRadius: "10px",
    padding: "10px",
  };

  const input_lable_fc = {
    margin: "0px",
    padding: "0px",
  };

  const div_input_button_fc = {
    margin: "auto",
    width: "80%",
    color:"gray",
    
  };

  return (
    <div style={add_entry_filled_cylinder__main}>
      <div style={add_entry_filled_cylinder__container}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            color:"gray"
          }}
        >
          <ClearIcon onClick={() => setShowAddEntryFilledCylinder(false)} />
          
        </div>
        <small style={{margin:"auto" }}>New Entry</small>
        <div style={div_input_button_fc}>
          <label style={input_lable_fc} htmlFor="">
            Select Type of Cylinder
          </label>

          <select value={postDataFilled} onChange={(e)=>setpostDataFilled(e.target.value)} style={{width:"75%", height:"30px", backgroundColor:"#fff",borderRadius: "5px",}} >
            <option value="1">Domestic 15kg</option>
            <option value="2">Commercial 21kg</option>
            <option value="3">Commercial/VOT/LOT 33kg</option>
            <option value="4">Commercial/LOT 45kg</option>
           
          </select>
          
          <button onClick={()=> setincreDecre(increDecre<=1?increDecre:increDecre-1)} style={{borderRadius:"5px",width:"27px",background:"#fff",border:"0.5px solid gray",cursor:"pointer", height:"30px", marginLeft:"3px"}}>-</button>
          <span style={{color:"black"}}>{increDecre}</span>
          <button onClick={()=> setincreDecre(increDecre+1)} style={{borderRadius:"5px",width:"27px",background:"#fff",border:"0.5px solid gray",cursor:"pointer", height:"30px", marginLeft:"3px"}}>+</button>
      
          <br />
          {/* <label style={input_lable_fc} htmlFor="">
            Ouantity
          </label>
          <input style={input_lable_fc} type="text" /> <br /> */}
          <br />
          {/* <label style={input_lable_fc} htmlFor="">
            Date
          </label>
          <input style={input_lable_fc} type="text" /> <br /><br /> */}
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={postAPI} style={{padding:" 8px 60px", textTransform:"capitalize"}} variant="contained" color="success">
              Save
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AddEntryFilledCylinder;
