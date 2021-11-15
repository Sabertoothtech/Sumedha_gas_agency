import React, { useState } from 'react'
import LeftSidebar from '../../Sidebar/LeftSidebar'
import '../SettingCss/Setting.css'
import Big4Container from './Big4Container'
import GetHelp from './GetHelp/GetHelp'
import ManageAgency from './ManageAgency/ManageAgency'
import AddDriver from './ManageDriver/AddDriver'
import ManageDriver from './ManageDriver/ManageDriver'
import UpdateDriver from './ManageDriver/UpdateDriver'
import SettingTopHeader from './SettingTopHeader'
import SetGasPrice from './SetGasPriceContainer/SetGasPrice'

function Setting() {
    const [showContainer, setShowContainer] = useState(0)
    const [showAddDriver, setshowAddDriver] = useState(false)
    const [showUpdateDriver, setshowUpdateDriver] = useState(false)
    return (
        <div className="setting__main">
            <LeftSidebar />
            <div className="setting__container">
                
                
                <div className="setting_container_main">
                    <SettingTopHeader pageName="Setting" />
                    <hr style={{ color: "#f5f5f5" }} />
                    {showAddDriver ? <AddDriver setShowCon={setshowAddDriver} /> : ""}
                    {showUpdateDriver ? <UpdateDriver setShowupdateCon={setshowUpdateDriver} /> : ""}
                    <div className="setting_container__both_container">
                    
                        <div className="setting_4big_container"><Big4Container setshowcontainer={setShowContainer} />
                        </div>
                        <div className="setting_1big_container">
                            {showContainer === 0 && <GetHelp n={showContainer} />}
                            {showContainer === 1 && <ManageAgency n={showContainer} />}
                            {showContainer === 2 && <ManageDriver setdriverPopUp={setshowAddDriver} setupdatePopUp={setshowUpdateDriver} />}
                            {showContainer === 3 && <SetGasPrice/> }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
