import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { BiRupee } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { NavLink } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { margin } from "@mui/system";

function MobNavbar() {
  const matches = useMediaQuery('(max-width:500px)');
  return (
    <div
    style={{
        width: "100%",
        height: "40px",
        marginBottom: "10px",
        position:"fixed",
        zIndex:"1",
        top:"0px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        fontSize:"small",
        // margin:"0px 50px",
        width:"100%",
        background:"#fff"
      }}
    >
      <NavLink
      to="/dashboard"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <DashboardIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>Dashboard</p>
      </NavLink>

      <NavLink
      to="/filledcylinder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <LocalGasStationIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>FilledCylinder</p>
      </NavLink>

      <NavLink
      to="/emptycylinder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <LocalGasStationOutlinedIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>Empty Cylinder</p>
      </NavLink>


      <NavLink
      to="/profile"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <PermIdentityOutlinedIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>Profile</p>
      </NavLink>


      <NavLink
      to="/accessories"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <ConstructionOutlinedIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>Accessories</p>
      </NavLink>

      <NavLink
      to="/myorder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <StarBorderOutlinedIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>My Order
        </p>
      </NavLink>

      <NavLink
      to="/finance"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <BiRupee style={{ fontSize:"20px"}}/>
        <p style={{display:matches?"none":"flex"}}>Finance</p>
      </NavLink>

      <NavLink
      to="/setting"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <SettingsIcon fontSize="small"/>
        <p style={{display:matches?"none":"flex"}}>Setting</p>
      </NavLink>
      
    </div>
  );
}

export default MobNavbar;
