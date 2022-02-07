import React from "react";
import "./SidebarProfile.css";
import { NavLink, useHistory } from "react-router-dom";
import {Img} from 'react-image'
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { BiRupee } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";


function SidebarProfile() {
  const history = useHistory();
  const iconData = [
    {
      className: "sidebar_nav_item",
      icon: RiDashboard3Line,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      className: "sidebar_nav_item",
      icon: LocalGasStationIcon,
      name: "Filled Cylinder",
      path: "/filledcylinder",
    },
    {
      className: "sidebar_nav_item",
      icon: LocalGasStationOutlinedIcon,
      name: "Empty Cylinder",
      path: "/emptycylinder",
    },
    {
      className: "sidebar_nav_item",
      icon: ConstructionOutlinedIcon,
      name: "Accessories",
      path: "/accessories",
    },
    {
      className: "sidebar_nav_item",
      icon: StarBorderOutlinedIcon,
      name: "My Order",
      path: "/myorder",
    },
    {
      className: "sidebar_nav_item",
      icon: BiRupee,
      name: "Finance",
      path: "/finance",
    },
    {
      className: "sidebar_nav_item",
      icon: SettingsIcon,
      name: "Setting",
      path: "/setting",
    },
  ];

  return (
    <div className="sidebar_profile_main">
      <div className="sidebar_profile_imageContainer">
        <Avatar alt="Remy Sharp" src="" variant='circular' style={{width:"80px", height:"80px"}} />
        {/* <img alt="{jj}" style={{borderRadius: "50%", width:"1000px", height:"500px"}} width="80px" src="https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" /> */}
        <small>John Cena</small>
        <br />
        <NavLink style={{fontWeight:"600"}} id="nav_profile" to="/profile">
          Profile
        </NavLink>
      </div>
      <br /> <hr />
      <br /> <br />
      <div className="sidebar_profile_icon_list">
        <ul>
          <strong
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              letterSpacing: "1px",
            marginLeft:"20px"
              
            }}
          >
            MENU 
          </strong>
          {iconData.map((icon, idx) => (
            <li key={idx} className={icon.className}>
              <NavLink
                activeStyle={{ color: "rgb(34, 9, 146)", fontWeight:"bolder"}}
                style={{color: "gray",fontWeight:"500"}}
                to={icon.path}
              >
                <icon.icon size={25}   />
                <small style={{ letterSpacing: "1px" }}>
                  {icon.name}
                </small>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>{" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          sessionStorage.removeItem("token");
          history.push("/");
        }}
        color="inherit"
        variant="contained"
        style={{padding: "8px 45px",}}
      >
        Logout
      </Button>
    </div>
  );
}

export default SidebarProfile;
