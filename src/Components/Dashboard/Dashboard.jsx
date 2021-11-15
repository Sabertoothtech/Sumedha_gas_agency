import React from 'react'
import './Dashboard.css'
import LeftSidebar from '../Sidebar/LeftSidebar'

function Dashboard() {
    return (
        <>
            <div className="dashboard__main">
                <LeftSidebar />
                <div className="dashboard__container">
                    Dashboard
                </div>
            </div>
        </>
    )
}

export default Dashboard
