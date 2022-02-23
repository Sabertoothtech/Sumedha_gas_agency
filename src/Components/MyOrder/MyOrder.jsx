import React from 'react'
import LeftSidebar from '../Sidebar/LeftSidebar'
import './MyOrder.css'
import Header from '../MyOrder/container/Header'

function MyOrder() {
  return (
    <div className='myorder__container'>
        <LeftSidebar/>
        <div className="myorder_item">
            <div className="myorder_container_main">
                <div className="header_myoredr_con">
                    <Header/>
                </div>
                <hr style={{ color: "#f5f5f5" }} />

                <div className="myorder_botton_container">
                    <div className="myorder_botton_left_container">
                        <div className="myorder_botton_left_all_container aactive">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container inactive">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container inactive">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container in-active">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container inactive">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container inactive">
                            RD Gas Agency
                        </div>
                        <div className="myorder_botton_left_all_container inactive">
                            RD Gas Agency
                        </div>
                    </div>
                    <div className="myorder_botton_right_container">Right</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrder