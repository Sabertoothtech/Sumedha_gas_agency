import React from 'react'

function TableDashboard() {
    const Table_tablr={
        display:"flex",
        justifyContent:"space-between"
    }
    return (
        <div style={{ width: "90%", height: "90%", margin: "auto" }}>
            <small>Top 10 Agencies</small>
            <div style={Table_tablr}>
                <small style={{margin:"0px", padding:"0px"}}>
                    <small style={{margin:"0px", padding:"0px"}}>Agency/company</small>
                    <small>RD Gas Agency</small>
                    <small>RD Gas Agency</small>
                    <small>RD Gas Agency</small>
                    <small>RD Gas Agency</small>
                    <small>RD Gas Agency</small>
                    <small>RD Gas Agency</small>
                        
                </small>
                <small style={{margin:"0px", padding:"0px"}}> <small>Order</small>
                    <small>18</small>
                    <small>23</small>
                    <small>32</small>
                    <small>11</small>
                    
                </small>
            </div>

        </div>
    )
}

export default TableDashboard
