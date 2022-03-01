import React, { useState } from "react";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import "../SettingCss/Setting.css";
import Big4Container from "./Big4Container";
import GetHelp from "./GetHelp/GetHelp";
import ManageAgency from "./ManageAgency/ManageAgency";
import AddDriver from "./ManageDriver/AddDriver";
import ManageDriver from "./ManageDriver/ManageDriver";
import UpdateDriver from "./ManageDriver/UpdateDriver";
import SettingTopHeader from "./SettingTopHeader";
import SetGasPrice from "./SetGasPriceContainer/SetGasPrice";
import DiscountPrice from "./DiscountPrice/DiscountPrice";
import AddNewAgencyContainer from "./ManageAgency/ManageAgencyAllContainer/AddNewAgencyContainer";
import CostOfEmptyCylinder from "../../Setting/SettingJsx/CostOfEmptyCylinder/CostOfEmptyCylinder";
import ManageVender from "./ManageVender/ManageVender";
import Update from "./ManageVender/Update";
import AddVendor from "./ManageVender/AddVendor";
import ChangePassword from "./ChangePassword/ChangePassword";
import UpdateAgency from "./ManageAgency/UpdateAgency";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobNavbar from "../../../CommonComponents/MobNavbar";

function Setting() {
  const matches = useMediaQuery("(max-width:1100px)");
  const [showContainer, setShowContainer] = useState(0);
  const [showAddDriver, setshowAddDriver] = useState(false);
  const [showAddAgency, setshowAddAgency] = useState(false);
  const [showUpdateAgency, setshowupdateAgency] = useState(false);
  const [showUpdateDriver, setshowUpdateDriver] = useState(false);
  const [showUpdateVendor, setshowUpdateVendor] = useState(false);
  const [showAddeVendor, setshowAddVendor] = useState(false);

  // Update Driver const
  const [udDriverId, setUpDriverId] = useState("");
  const [uagencyId, setuagencyId] = useState(null);
  const [vendorupdateID, setvendorupdateID] = useState(null);
  return (
    <div className="setting__main">
      {matches ? null : <LeftSidebar />}
      <div className="setting__container">
        {matches ? <MobNavbar /> : null}
        <div className="setting_container_main">
          <SettingTopHeader pageName="Setting" />
          <hr style={{ color: "#f5f5f5" }} />
          {showAddDriver ? <AddDriver setShowCon={setshowAddDriver} /> : ""}
          {showUpdateDriver ? (
            <UpdateDriver
              udDriverId={udDriverId}
              setShowupdateCon={setshowUpdateDriver}
            />
          ) : (
            ""
          )}
          {showAddAgency ? (
            <AddNewAgencyContainer setshowAddAgency={setshowAddAgency} />
          ) : (
            ""
          )}
          {/* {showUpdateVendor ? <Update setshowUpdateVendor={setshowUpdateVendor} /> : ""} */}
          {showUpdateVendor ? (
            <Update
              vendorupdateID={vendorupdateID}
              setshowUpdateVendor={setshowUpdateVendor}
            />
          ) : (
            ""
          )}
          {showAddeVendor ? (
            <AddVendor setshowAddVendor={setshowAddVendor} />
          ) : (
            ""
          )}
          {showUpdateAgency ? (
            <UpdateAgency
              uagencyId={uagencyId}
              setshowupdateAgency={setshowupdateAgency}
            />
          ) : (
            ""
          )}

          {!showAddAgency ? (
            !showAddDriver ? (
              !showAddeVendor ? (
                !showUpdateAgency ? (
                  !showUpdateDriver ? (
                    !showUpdateVendor ? (
                      <div className="setting_container__both_container">
                        <div className="setting_4big_container">
                          <Big4Container setshowcontainer={setShowContainer} />
                        </div>
                        <div className="setting_1big_container">
                          {showContainer === 0 && <GetHelp n={showContainer} />}
                          {showContainer === 1 && (
                            <ManageAgency
                              setuagencyId={setuagencyId}
                              setshowupdateAgency={setshowupdateAgency}
                              setshowAddAgency={setshowAddAgency}
                            />
                          )}
                          {showContainer === 2 && (
                            <ManageDriver
                              setUpDriverId={setUpDriverId}
                              setdriverPopUp={setshowAddDriver}
                              setupdatePopUp={setshowUpdateDriver}
                            />
                          )}
                          {showContainer === 3 && <SetGasPrice />}
                          {showContainer === 4 && <DiscountPrice />}
                          {showContainer === 5 && (
                            <ManageVender
                              setshowUpdateVendor={setshowUpdateVendor}
                              setvendorupdateID={setvendorupdateID}
                              setshowAddVendor={setshowAddVendor}
                            />
                          )}
                          {showContainer === 6 && <CostOfEmptyCylinder />}
                          {showContainer === 7 && <ChangePassword />}
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )
              ) : (
                ""
              )
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Setting;
