import React from 'react'
import Button from "@mui/material/Button";
import "./PayDetails.css";
import { financeDateupdateAPI,financeTraUpdateAPI } from "../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function PayDetails({setshowPdetail}) {
  return (
 
      <div className="p-d__components">
        <div className="p_d_header">
          <strong className="strong_p_D"></strong>
          <Button
            style={{
              fontSize: "10px",
              color: "gray",
              textTransform: "capitalize",
            }}
          onClick={()=>setshowPdetail(false)}
          >
            &#60; Back
          </Button>
        </div>
        <div className="p_d_amount_date">
          <div className="p_d_amount1_date">
            <small>Total amount to collect</small>
            <strong className="strong_p_D"></strong>
          </div>
  
          <div className="p_d_amount2_date">
            <small>Date</small>
            <strong className="strong_p_D"></strong>
          </div>
        </div>
        <strong className="strong_p_D">Last 5 Transaction</strong>
        <table className="table_p_d">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Transaction mode</th>
          </tr>
          <tr>
            <td align="center">12/23/23</td>
            <td align="center">12/23/23</td>
            <td align="center">12/23/23</td>
          </tr>
        </table>
  
        <strong className="strong_p_D">Last 5 invoices</strong>
        <table className="table_p_d">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Transaction mode</th>
          </tr>
          <tr>
            <td align="center">12/23/23</td>
            <td align="center">12/23/23</td>
            <td align="center">12/23/23</td>
          </tr>
        </table>
        <strong className="strong_p_D">Add Transaction</strong>
        <div className="input_P_D_update">
          <input className="input_P_D" type="date" placeholder="date" />
          <input className="input_P_D" type="text" placeholder="amount" />
          <input className="input_P_D" type="text" placeholder="Mode" />
        </div>
  
        <Button
          style={{
            backgroundColor: "rgb(34, 9, 146)",
            fontSize: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
            padding: "6px 45px",
            display: "block",
            marginBottom: "10px",
          }}
          
          variant="contained"
          
        >
          Update
        </Button>
       
        <ToastContainer/>
      </div>
    );
  }
  


export default PayDetails