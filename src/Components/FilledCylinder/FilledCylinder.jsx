import React from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./FilledCylinder.css";
import HeaderFilledCylinder from "./AllContainerSmall/HeaderFilledCylinder";
import Small4FilledCylinder from "./AllContainerSmall/Small4FilledCylinder";
import BigFilledCylinder from "./AllContainerSmall/BigFilledCylinder";

function FilledCylinder() {
  return (
    <div className="filled_cylinder__main">
      <LeftSidebar />
      <div className="filled_cylinder__container">
        <div className="filled_cylinder__main_container">
          <HeaderFilledCylinder />
          <hr style={{ color: "#f5f5f5" }} />
          <div className="filled_cylinder_3small">
            <Small4FilledCylinder bgcolor="#dc143c" color="#dc143c" />
            <Small4FilledCylinder bgcolor="#00BFFF" color="#00BFFF" />
            <Small4FilledCylinder bgcolor="#7b68ee" color="#7b68ee" />
          </div>
          <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />
          <div className="filled_cylinder_both_container">
            <div className="filled_cylinder_4big">
              <BigFilledCylinder />
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
                <div className="filled_cylinder_left_table">
                  <label htmlFor="">Data</label>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                  <small>12/07/2022</small>
                </div>
                <div className="filled_cylinder_right_table">
                  <label htmlFor="">Quantity</label>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                  <small>50</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilledCylinder;
