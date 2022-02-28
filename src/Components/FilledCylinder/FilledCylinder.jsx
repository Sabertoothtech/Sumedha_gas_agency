import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./FilledCylinder.css";
import HeaderFilledCylinder from "./AllContainerSmall/HeaderFilledCylinder";
import Small4FilledCylinder from "./AllContainerSmall/Small4FilledCylinder";
import BigFilledCylinder from "./AllContainerSmall/BigFilledCylinder";
import AddEntryFilledCylinder from "./AllContainerSmall/AddEntryFilledCylinder";
import { filledCylinderGetAPI } from ".././../Utils/utils";
import useMediaQuery from '@mui/material/useMediaQuery';
import MobNavbar from "../../CommonComponents/MobNavbar";

function FilledCylinder() {
  const matches = useMediaQuery('(max-width:1100px)');
  const [showAddEntryFilledCylinder, setShowAddEntryFilledCylinder] =
    useState(false);
  const [showFilledcontainer, setShowFilledcontainer] = useState(0);
  const [circledata, setcircledata] = useState(null)

  const [gasID, setgasID] = useState(1);
  const [gasName, setgasName] = useState("Domestic 15kg");
  const [getdata, setgetdata] = useState([]);

  const update = async () => {
    const config = {
      url: filledCylinderGetAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        if (res.status === 200) {
          const ddname = res.data.map((dname, idx) => ({
            id: dname.cylinder_type_id.id,
            quantity: dname.quantity,
            date: dname.date,
            name: dname.cylinder_type_id.name,
          
          }));
          setgetdata(ddname);
        }
      })
      .catch((err) => {
        console.log("gas data not found all..", err);
      });
  };

  const sum = (id)=>{

    const sumall = getdata.map(item => item.id===id?item.quantity:0
      ).reduce((prev, curr) => prev + curr, 0);
    return sumall
  }

  useEffect(() => {
    update();
  }, []);

  return (
    <div className="filled_cylinder__main">
      {matches?null:<LeftSidebar />}
      <div className="filled_cylinder__container">
      {matches?<MobNavbar/>:null}
        <div className="filled_cylinder__main_container">
          <HeaderFilledCylinder
            setShowAddEntryFilledCylinder={setShowAddEntryFilledCylinder}
          />
          <hr style={{ color: "#f5f5f5" }} />
          {showAddEntryFilledCylinder ? (
            <AddEntryFilledCylinder
              setShowAddEntryFilledCylinder={setShowAddEntryFilledCylinder}
            />
          ) : (
            ""
          )}
          <div className="filled_cylinder_3small">
            <Small4FilledCylinder kg= "+15kg" data1=""  data = {sum(1)} name="Domestic" bgcolor="#00BFFF" color="#00BFFF" />
            <Small4FilledCylinder kg="+21kg"  kg1="VOT/LOT+33kg" data={sum(2)} data1={sum(3)} name="Commercial/VOT/LOT" bgcolor="#FA8072" color="#FA8072" />
            <Small4FilledCylinder kg="LOT/+45kg" kg1="" data1=""  data={sum(4)} name="Commercial/LOT" bgcolor="#FFD700" color="#FFD700" />
          </div>
          <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />
          <div className="filled_cylinder_both_container">
            <div className="filled_cylinder_4big">
              <BigFilledCylinder
                setShowFilledcontainer={setShowFilledcontainer}
                setgasID={setgasID}
                setgasName={setgasName}
              />
            </div>
            <div className="filled_cylinder_changeable_box">
              <small
                style={{
                  fontWeight: "500",
                  fontSize: "10px",

                  margin: "0px",
                  marginBottom: "5px",
                  padding: "0px",
                }}
              >
                All Entries
              </small>
              <small
                style={{
                  fontWeight: "530",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  margin: "0px",
                  marginBottom: "10px",
                  padding: "0px",
                }}
              >
                {gasName}
              </small>

              <div className="filled_cylinder_table">
                <table
                  style={{ textAlign: "center", borderCollapse: "collaps" }}
                >
                  <thead>
                    <th>Date</th>
                    <th>Quqntity</th>
                  </thead>
                  <tbody>
                    {getdata.map((ele, key) => (
                      ele.id === gasID?<tr key={key}>
                      <td>{ele.date}</td>
                      <td>{ele.quantity}</td>
                    
                    </tr>:null
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilledCylinder;
