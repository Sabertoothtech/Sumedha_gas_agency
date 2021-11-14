import React from 'react'
import './LeftSidebar.css'
import SidebarProfile from './SidebarProfile/SidebarProfile'

function LeftSidebar() {
    return (
        <>
        <div className="left_sidebar__main">
            <SidebarProfile />
        </div>
        </>
    )
}

export default LeftSidebar
