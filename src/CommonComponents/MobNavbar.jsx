import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { BiRupee } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import useMediaQuery from '@mui/material/useMediaQuery';
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { NavLink } from "react-router-dom";

function MobNavbar() {
  const matches = useMediaQuery('(max-width:500px)');
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        background: "#fff",
        display:"flex",
        justifyContent:"space-around",
       position:"fixed",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        zIndex:"1"
      }}
    >
      <NavLink 
      to="/dashboard"
     
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <RiDashboard3Line fontSize="23px"/>
        <p  style={{display:matches?"none":"flex"}}>Dashboard</p>
      </NavLink>

      <NavLink
      to="/filledcylinder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <LocalGasStationIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>FilledCylinder</p>
      </NavLink>

      <NavLink
      to="/emptycylinder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <LocalGasStationOutlinedIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>Empty Cylinder</p>
      </NavLink>

      
      <NavLink
      to="/profile"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <PermIdentityOutlinedIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>Profile</p>
      </NavLink>

      <NavLink
      to="/accessories"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <ConstructionOutlinedIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>Accessories</p>
      </NavLink>

      <NavLink
      to="/finance"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <BiRupee fontSize="23px"/>
        <p  style={{display:matches?"none":"flex"}}>Finance</p>
      </NavLink>

      <NavLink
      to="/myorder"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <StarBorderOutlinedIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>My Oredr</p>
      </NavLink>

      <NavLink
      to="/setting"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color:"grey",
          textDecoration:"none",
          fontSize:"small"
        }}
        activeStyle={{color:"blue", }}
      >
        <SettingsIcon size="small"/>
        <p  style={{display:matches?"none":"flex"}}>Setting</p>
      </NavLink>
      
    </div>
  );
}

export default MobNavbar;
