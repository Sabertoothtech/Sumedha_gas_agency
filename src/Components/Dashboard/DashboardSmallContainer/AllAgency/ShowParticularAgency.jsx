import React from "react";
import "./ShowParticularAgency.css";
import CloseIcon from '@mui/icons-material/Close';

function ShowParticularAgency({setShowAgencyBool}) {
  return (
    <div className="show_particular_agency__main">
      <div className="show_particular_agency__nameedit">
        <strong>Agency</strong>
        <CloseIcon style={{color:"red", cursor:"pointer"}} onClick={()=> setShowAgencyBool(false)} />
      </div>
      <small style={{ color: "gray", margin: "0px", padding: "0px" }}>
        About
      </small>
      <div className="show_particular_agency_dataContainer">
        <small>Agency ID: 0001</small>
        <small>Contact No: 91182733 </small>
        <small>Email: email@gmail.com</small>
        <small>Gst No: 98768</small>
        <small>Deposite No: 400000</small>
        <small>Empty Cyl. Taken: 233</small>
        <small>Types of cyl:Domestic</small>
        <small>Address: Nagpur , India</small>
      </div>

      <div className="show_particular_agency_bothtable">
        <div className="show_particular_agenct_firsttable">
          <small style={{ color: "gray", margin: "0px", padding: "0px" }}>
            Delivery transaction
          </small>
          <div className="show_particular_devivery_table">
            <table>
              <tr>
                <th>Date</th>
                <th>Cylinder Type</th>
                <th>Transaction Type</th>
                <th>Ounatity</th>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="show_particular_agenct_secondtable">
          <small style={{ color: "gray", margin: "0px", padding: "0px" }}>
            Financial transaction
          </small>
          <div className="show_particular_financial_table">
            <table>
              <tr>
                <th>Date</th>
                <th>Cylinder Type</th>
                <th>Transaction Type</th>
                <th>Ounatity</th>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>India</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowParticularAgency;
