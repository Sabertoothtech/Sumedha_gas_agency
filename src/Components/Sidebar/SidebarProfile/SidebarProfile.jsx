import React from 'react'
import './SidebarProfile.css'
import { NavLink, useHistory } from 'react-router-dom'
import Men from "./men.jpg"
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { style } from '@mui/system';

function SidebarProfile() {
    const history = useHistory();
    const iconData = [
        {
            className: "sidebar_nav_item",
            icon: DashboardIcon,
            name: "Dashboard",
            path: "/dashboard"

        },
        {
            className: "sidebar_nav_item",
            icon: LocalGasStationIcon,
            name: "Filled Cylinder",
            path: "/filledcylinder"

        },
        {
            className: "sidebar_nav_item",
            icon: LocalGasStationOutlinedIcon,
            name: "Empty Cylinder",
            path: "/emptycylinder"

        },
        {
            className: "sidebar_nav_item",
            icon: ConstructionOutlinedIcon,
            name: "Accessories",
            path: "/accessories"

        },
        {
            className: "sidebar_nav_item",
            icon: StarBorderOutlinedIcon,
            name: "My Order",
            path: "/myorder"

        },
        {
            className: "sidebar_nav_item",
            icon: StarBorderIcon,
            name: "Finance",
            path: "/finance"

        },
        {
            className: "sidebar_nav_item",
            icon: SettingsIcon,
            name: "Setting",
            path: "/setting"

        }
    ]

    return (
        <div className="sidebar_profile_main">
            <div className="sidebar_profile_imageContainer">
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 70, height: 70 }}
                />

                <small>John Cena</small>
                <br />
                <NavLink id="nav_profile" to="/profile">Profile</NavLink>
            </div><br /> <hr /><br /> <br />
            <div className="sidebar_profile_icon_list">
                <ul>
                    <strong style={{fontSize:"15px",fontWeight:"550", letterSpacing:"1px"}}>MENU</strong>
                    {
                        iconData.map((icon, idx) => (

                            <li key={idx} className={icon.className}>
                                <NavLink activeStyle={{color:"rgb(34, 9, 146)"}} to={icon.path}>
                                    <icon.icon fontSize="small" color="gray" />
                                    <small style={{fontWeight:"500", letterSpacing:"1px"}}>{icon.name}</small>
                                </NavLink>

                            </li>

                        ))
                    }
                </ul>
            </div> <br /><br /><br /><br /><br /><br /><br />
            <Button onClick={()=> {sessionStorage.removeItem('token'); history.push('/')}} color="inherit" variant="contained">Logout</Button>
        </div>
    )
}

export default SidebarProfile
