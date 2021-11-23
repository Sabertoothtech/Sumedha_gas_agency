import React from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./EmptyCylinder.css";
import HeaderEmpty from "./AllContainer/HeaderEmpty";
import Small4FilledCylinder from "../FilledCylinder/AllContainerSmall/Small4FilledCylinder"
import Big4ContainerEmpty from "./AllContainer/Big4ContainerEmpty"

function EmptyCylinder() {
  return (
    <div className="empty_cylinder__main">
      <LeftSidebar />
      <div className="empty_cylinder__container">
        <div className="empty_cylinder_main_container">
          <HeaderEmpty />
          <hr style={{ color: "#f5f5f5" }} />
          <div className="empty_cylinder_3container">
              <Small4FilledCylinder bgcolor="#dc143c" color="#dc143c"/>
              <Small4FilledCylinder bgcolor="#00BFFF" color="#00BFFF"/>
              <Small4FilledCylinder bgcolor="#7b68ee" color="#7b68ee"/>
          </div>
          <div className="empty_cylinder_both_container">
              <div className="empty_cylinder_4_small_container">
                 <Big4ContainerEmpty/> 
              </div>
              <div className="empty_cylinder_1_changeable_container">
                <small style={{fontSize:"12px", color:"gray", marginBottom:"10px"}}>All cylinder in stock</small>
                <small style={{marginBottom:"15px"}}>Domestic 15kg</small>
                <table>
                  <tr>
                    <td>Agency name</td>
                    <td>Date</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <th>RD Agency</th>
                    <th>12/10/1990</th>
                    <th>50</th>
                  </tr>
                  <tr>
                    <th>RD Agency</th>
                    <th>12/10/1990</th>
                    <th>50</th>
                  </tr>
                  <tr>
                    <th>RD Agency</th>
                    <th>12/10/1990</th>
                    <th>50</th>
                  </tr>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCylinder;
