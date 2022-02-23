import React, { useState, useEffect } from "react";
import { getSetGasPriceAPI } from "../../../../Utils/utils";
import "./SetGasPrice.css";
import axios from "axios";
import Button from "@mui/material/Button";
import EditPrice from "./EditPrice";
import { getAgencyAPI } from "../../../../Utils/utils";
import { ToastContainer, toast } from 'react-toastify';

function SetGasPrice() {
  const [updatedasprice, setupdatedasprice] = useState([]);

  const updateFieldChanged = (index) => (e) => {
    let newArr = [...updatedasprice];
    let name_inp = e.target.name;
    let value = e.target.value;
    if (name_inp === "name") {
      newArr[index].amount = value;
    } else if (name_inp === "name1") {
      newArr[index].cgst = value;
    } else {
      newArr[index].sgst = value;
    }
    setupdatedasprice(newArr);
  };

  useEffect(() => {
    const config = {
      url: getSetGasPriceAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setupdatedasprice(
          res.data.map((ele, idx) => ({
            id: ele.cylinder_type_id.id,
            name: ele.cylinder_type_id.name,
            amount: ele.amount,
            cgst: ele.cgst,
            sgst: ele.sgst,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const setGasPrice = async () => {
    var FormDatas = new FormData();

    // FormDatas.append("cylinder_gas_price_id", JSON.stringify([{"cylinder_type_id": 2, "amount": 202,"cgst":"cgst1","sgst":"sgst1"}, {"cylinder_type_id": 2, "amount": 20,"cgst":"64559sffds","sgst":"ffsdf856"}]));
    FormDatas.append(
      "cylinder_gas_price_id",
      JSON.stringify(
        updatedasprice.map((ele) => ({
          cylinder_type_id: ele.id,
          amount: ele.amount,
          cgst: ele.cgst,
          sgst: ele.sgst,
        }))
      )
    );

    const config = {
      url: getSetGasPriceAPI,
      method: "POST",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    await axios(config)
      .then((res) => {
        toast.success(res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });;
      })
      .catch((err) => {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
  };

  return (
    <div className="set_gas_price__main">
      <small>Gas price</small>
      <br />
      <br />
      <div className="set_gas_price__container">
        <table>
          <thead>
            <th align="left">Gas Name</th>
            <th align="left">CGST</th>
            <th align="left">SGST</th>
          </thead>

          <tbody>
            {updatedasprice.map((ele, id) => (
              <tr key={id}>
                <td>
                  <small style={{ margin: "0px", padding: "0px" }}>
                    {ele.name}
                  </small>
                  <br />
                  <input
                  className="inputAccess"
                    value={ele.amount}
                    onChange={updateFieldChanged(id)}
                    name="name"
                    type="text"
                  />
                </td>
                <td>
                  <input
                  className="inputAccess"
                    value={ele.cgst}
                    onChange={updateFieldChanged(id)}
                    style={{ width: "90px", marginTop: "14px" }}
                    name="name1"
                    type="text"
                  />
                </td>
                <td>
                  <input
                  className="inputAccess"
                    value={ele.sgst}
                    onChange={updateFieldChanged(id)}
                    style={{ width: "90px", marginTop: "14px" }}
                    name="name2"
                    type="text"
                  />
                </td>
              </tr>
            ))}
            {/* {updatedasprice} */}
          </tbody>
        </table>
      </div>

      <div className="setgasprice__buton">
        <Button
          style={{
            backgroundColor: "rgb(34, 9, 146)",
            fontSize: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
            padding: "8px 50px",
            marginTop: "25px",
          }}
          variant="contained"
          onClick={setGasPrice}
        >
          Edit Price
        </Button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default SetGasPrice;
