import React,{useState} from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./FilledCylinder.css";
import HeaderFilledCylinder from "./AllContainerSmall/HeaderFilledCylinder";
import Small4FilledCylinder from "./AllContainerSmall/Small4FilledCylinder";
import BigFilledCylinder from "./AllContainerSmall/BigFilledCylinder";
import AddEntryFilledCylinder from "./AllContainerSmall/AddEntryFilledCylinder";

function FilledCylinder() {
  const [showAddEntryFilledCylinder, setShowAddEntryFilledCylinder] = useState(false)
  const [showFilledcontainer,setShowFilledcontainer] = useState(0)

  return (
    <div className="filled_cylinder__main">
      <LeftSidebar />
      <div className="filled_cylinder__container">
        <div className="filled_cylinder__main_container">
          <HeaderFilledCylinder setShowAddEntryFilledCylinder={setShowAddEntryFilledCylinder} />
          <hr style={{ color: "#f5f5f5" }} />
          {showAddEntryFilledCylinder? <AddEntryFilledCylinder setShowAddEntryFilledCylinder={setShowAddEntryFilledCylinder}/>:""}
          <div className="filled_cylinder_3small">
            <Small4FilledCylinder bgcolor="#dc143c" color="#dc143c" />
            <Small4FilledCylinder bgcolor="#00BFFF" color="#00BFFF" />
            <Small4FilledCylinder bgcolor="#7b68ee" color="#7b68ee" />
          </div>
          <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />
          <div className="filled_cylinder_both_container">
            <div className="filled_cylinder_4big">
              <BigFilledCylinder setShowFilledcontainer={setShowFilledcontainer} />
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
                All Entries
              </small>

              <div className="filled_cylinder_table">
                <table style={{textAlign:"center",borderCollapse: "collaps"}}>
                  <tr>
                  <th>Date</th>
                  <th>Quqntity</th>
                  </tr>

                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>12/10/20</td>
                    <td>20</td>
                  </tr>
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
