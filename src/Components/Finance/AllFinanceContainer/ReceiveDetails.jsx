import React, { useState } from "react";
import "./ReceiveDetails.css";
import Button from "@mui/material/Button";
import { financeDateupdateAPI } from "../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ReceiveDetails({ setshowRdetail, receiveDetailsData,setreceiveDetailsData }) {
  const [updateTraData, setupdateTraData] = useState({
    id: null,
    date: null,
    amount: null,
    mode: null,
  });


  const [updatedateData, setdateTraData] = useState(null);

  const updateDate = async() => {
    var FormDatas = new FormData();
    FormDatas.append("agency_id",5)
    FormDatas.append("due_date",2021-12-25)
    await axios({
      method: "post",
      url: financeDateupdateAPI,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    }).then(res=>{
      toast.success(res.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }).catch(err=> toast.error('Something went wrong', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }))
  };

  return (
    <div className="r-d__components">
      <div className="r_d_header">
        <strong className="strong_r_D">{receiveDetailsData.name}</strong>
        <Button
          style={{
            fontSize: "10px",
            color: "gray",
            textTransform: "capitalize",
          }}
          onClick={() => setshowRdetail(false)}
          c
        >
          &#60; Back
        </Button>
      </div>
      <div className="r_d_amount_date">
        <div className="r_d_amount1_date">
          <small>Total amount to collect</small>
          <strong className="strong_r_D">{receiveDetailsData.amount}</strong>
        </div>

        <div className="r_d_amount2_date">
          <small>Date</small>
          <strong className="strong_r_D">{receiveDetailsData.date}</strong>
        </div>
      </div>
      <strong className="strong_r_D">Last 5 Transaction</strong>
      <table className="table_r_d">
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

      <strong className="strong_r_D">Last 5 invoices</strong>
      <table className="table_r_d">
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
      <strong className="strong_r_D">Add Transaction</strong>
      <div className="input_R_D_update">
        <input className="input_R_D" type="date" placeholder="date" />
        <input className="input_R_D" type="text" placeholder="amount" />
        <input className="input_R_D" type="text" placeholder="Mode" />
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
      <strong className="strong_r_D">Set Due Date</strong>
      <input className="input_R_D" type="date" placeholder="date" />
      <Button
        style={{
          backgroundColor: "rgb(34, 9, 146)",
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "capitalize",
          padding: "6px 45px",
          marginLeft: "15px",
        }}
        variant="contained"
        onClick={()=>updateDate()}
      >
        Update
      </Button>
      <ToastContainer/>
    </div>
  );
}

export default ReceiveDetails;
