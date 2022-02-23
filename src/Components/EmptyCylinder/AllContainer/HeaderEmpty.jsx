import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
// import APIdataSelectChange from '../EmptyCylinder'
import axios from "axios";
import { empty_instock } from "../../../Utils/utils";


function DashboardHeader({emptySelectAPIChange,setemptySelectAPIChange}) {

  const dth = {
    width: "95%",
    margin: "auto",
    height: "100px",
    display: "flex",
    alignItems: "center",

    // justifyContent: "space-between",
  };
  const dhBtn = {
    height: "50px",
    padding: "20px 20px",
    borderRadius: "30px",
    fontSize: "13px",
    fontWeight: "500",
    latterSpacing: "2px",
    textTransform: "capitalize",
  };


  return (
    
    <div style={dth} className="DashboardHeader__main">
      <p style={{ fontSize: "25px", letterSpacing: "1px" }}>Empty Cylinder</p>

      <select onChange={(e)=>setemptySelectAPIChange(e.target.value)} style={{backgroundColor:"white", marginLeft:"10px",padding:"6px 15px", borderColor:"gray", paddingRight:"30px"}} value={emptySelectAPIChange} id="">
        <option value="empty_cylinder_in_stock">In stock</option>
        <option value="empty_cylinder_to_collect">To collect</option>
        <option value="empty_cylinder_in_transit">In transit</option>
      </select>

    </div>
  
  );
}

export default DashboardHeader;
