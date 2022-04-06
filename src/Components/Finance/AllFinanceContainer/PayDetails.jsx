import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./PayDetails.css";
import { getvenderAmountPayable } from "../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PayDetails({ setshowPdetail, payableDetailsData }) {
  const [updatedataPayDetaile, setupdatedataPayDetaile] = useState({
    id: payableDetailsData.id,
    mode: "",
    date: "",
    amount: "",
  });

  async function update_mode_date_amount() {
    var FormDatas = new FormData();
    FormDatas.append("vendor_id", payableDetailsData.id);
    FormDatas.append("mode", updatedataPayDetaile.mode);
    FormDatas.append("amount", updatedataPayDetaile.amount);
    FormDatas.append("date", updatedataPayDetaile.date);
    await axios({
      method: "post",
      url: getvenderAmountPayable,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    })
      .then((res) => {
        toast.success(res.data, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) =>
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  }

  return (
    <div className="p-d__components">
      <div className="p_d_header">
        <strong className="strong_p_D">{payableDetailsData.name}</strong>
        <Button
          style={{
            fontSize: "10px",
            color: "gray",
            textTransform: "capitalize",
          }}
          onClick={() => setshowPdetail(false)}
        >
          &#60; Back
        </Button>
      </div>
      <div className="p_d_amount_date">
        <div className="p_d_amount1_date">
          <small>Total amount to collect</small>
          <strong className="strong_p_D">{payableDetailsData.amount}</strong>
        </div>

        <div className="p_d_amount2_date">
          <small>Date</small>
          <strong className="strong_p_D">{payableDetailsData.date}</strong>
        </div>
      </div>
      <strong className="strong_p_D">Last 5 Transaction</strong>
      <table className="table_p_d">
        <tr>
          <th align="left">Date</th>
          <th>Amount</th>
          <th>Transaction mode</th>
        </tr>

        {payableDetailsData.transaction.slice(0, 5).map((item, key) => (
          <tr key={key}>
            <td>{item.date}</td>
            <td align="center">{item.amount}</td>
            <td align="center">{item.mode}</td>
          </tr>
        ))}
      </table>

      <strong className="strong_p_D">Last 5 invoices</strong>
      <table className="table_p_d">
        <tr>
          <th align="left">Date</th>
          <th>Amount</th>
          <th>Transaction mode</th>
        </tr>
        {payableDetailsData.invoices.slice(0, 5).map((item, key) => (
          <tr key={key}>
            <td>{item.date}</td>
            <td align="center">{item.amount}</td>
            <td align="center">invoices</td>
          </tr>
        ))}
      </table>
      <strong className="strong_p_D">Add Transaction</strong>
      <div className="input_P_D_update">
        <input
          onChange={(e) =>
            setupdatedataPayDetaile({
              ...updatedataPayDetaile,
              date: e.target.value,
            })
          }
          className="input_P_D"
          type="date"
          placeholder="date"
        />
        <input
          onChange={(e) =>
            setupdatedataPayDetaile({
              ...updatedataPayDetaile,
              amount: e.target.value,
            })
          }
          className="input_P_D"
          type="text"
          placeholder="amount"
        />
        <input
          onChange={(e) =>
            setupdatedataPayDetaile({
              ...updatedataPayDetaile,
              mode: e.target.value,
            })
          }
          className="input_P_D"
          type="text"
          placeholder="Mode"
        />
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
        onClick={() => update_mode_date_amount()}
      >
        Update
      </Button>

      <ToastContainer />
    </div>
  );
}

export default PayDetails;
