import React from "react";
import Button from "@mui/material/Button";
// import { margin } from '@mui/system';

function DashboardHeader() {
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

      <select style={{backgroundColor:"white", marginLeft:"10px",padding:"6px 15px", borderColor:"gray", paddingRight:"30px"}} name="" id="">
          <option value="">In stock</option>
        <option value="">To collect</option>
        <option value="">In transit</option>
      </select>
    

    </div>
  );
}

export default DashboardHeader;
