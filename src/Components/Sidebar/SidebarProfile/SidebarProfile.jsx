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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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
            icon: AttachMoneyIcon,
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
                    sx={{ width: 100, height: 100 }}
                />

                <small>John Cena</small>
                <br />
                <NavLink id="nav_profile" to="/">Profile</NavLink>
            </div><br /> <hr /><br /> <br />
            <div className="sidebar_profile_icon_list">
                <ul>
                    <strong>Menu</strong>
                    {
                        iconData.map((icon, idx) => (

                            <li key={idx} className={icon.className}>
                                <NavLink to={icon.path}>
                                    <icon.icon fontSize="small" color="disabled" />
                                    <small>{icon.name}</small>
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
