import React, { useState, useEffect } from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./EmptyCylinder.css";
import HeaderEmpty from "./AllContainer/HeaderEmpty";
import Small4FilledCylinder from "../FilledCylinder/AllContainerSmall/Small4FilledCylinder";
import Big4ContainerEmpty from "./AllContainer/Big4ContainerEmpty";
import { empty_instock, empty_incollect } from "./../../Utils/utils";
import Stock from "./AllContainer/Stock";
import Collect from "./AllContainer/Collect";
import Transit from "./AllContainer/Transit";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobNavbar from "../../CommonComponents/MobNavbar";
import ShowCollect from "./AllContainer/ShowCollect";
import ShowTransit from "./AllContainer/ShowTransit";

function EmptyCylinder() {
  const matches = useMediaQuery("(max-width:1100px)");
  const [showCollect, setShowCollect] = useState(false);
  const [showTransit, setShowTransit] = useState(false);
  const [showFilledcontainer, setShowFilledcontainer] = useState(0);
  const [emptySelectAPIChange, setemptySelectAPIChange] = useState(
    "empty_cylinder_in_stock"
  );
  const [instockdata, setinstockdata] = useState([]);
  const [incollectdata, setincollectdata] = useState([]);
  const [testArray, settestArray] = useState([]);
  // console.log("activenow",showFilledcontainer)
  const stock = () => {
    const config = {
      url: `${empty_instock}`,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          setinstockdata(
            res.data.map((data) => ({
              id: data.data.cylinder_type_id.id,
              name: data.data.cylinder_type_id.name,
              agency_name:
                data.data.empty_cylinder_tocollect_id.agency_id.agency_name,
              date: data.data.empty_cylinder_tocollect_id.date,
              quantity: data.data.quantity,
            }))
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const collect = async () => {
    const config = {
      url: `${empty_incollect}`,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        if (res.status === 200) {
          setincollectdata(
            res.data.map((ele) => ({
              date: ele.data.empty_cylinder_to_collect,
            }))
          );
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    stock();
    collect();
  }, [emptySelectAPIChange]);

  return (
    <div className="empty_cylinder__main">
      {matches ? null : <LeftSidebar />}
      <div className="empty_cylinder__container">
        {matches ? <MobNavbar /> : null}

        <div className="empty_cylinder_main_container">
          {/* {incollectdata.map((item) => (
            <h2>{item.name.data.empty_cylinder_to_collect.id.agency_name}</h2>
          ))} */}
          <HeaderEmpty
            setemptySelectAPIChange={setemptySelectAPIChange}
            emptySelectAPIChange={emptySelectAPIChange}
            setShowCollect={setShowCollect}
            setShowTransit={setShowTransit}
          />
          <hr style={{ color: "#f5f5f5" }} />
          {showTransit || showCollect ? (
            showTransit ? (
              <ShowTransit setShowTransit={setShowTransit} />
            ) : (
              <ShowCollect setShowCollect={setShowCollect} />
            )
          ) : (
            <>
              <div className="empty_cylinder_3container">
                <Small4FilledCylinder bgcolor="#00BFFF" color="#00BFFF" />
                <Small4FilledCylinder bgcolor="#FA8072" color="#FA8072" />
                <Small4FilledCylinder bgcolor="#FFD700" color="#FFD700" />
              </div>

              <div className="empty_cylinder_both_container">
                <div className="empty_cylinder_4_small_container">
                  <Big4ContainerEmpty
                    setShowFilledcontainer={setShowFilledcontainer}
                  />
                </div>

                <div className="empty_cylinder_1_changeable_container">
                  {emptySelectAPIChange === "empty_cylinder_in_stock" && (
                    <Stock
                      instockdata={instockdata}
                      showFilledcontainer={showFilledcontainer}
                    />
                  )}
                  {emptySelectAPIChange === "empty_cylinder_to_collect" && (
                    <Collect
                      incollectdata={incollectdata}
                      showFilledcontainer={showFilledcontainer}
                    />
                  )}
                  {emptySelectAPIChange === "empty_cylinder_in_transit" && (
                    <Transit />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmptyCylinder;
