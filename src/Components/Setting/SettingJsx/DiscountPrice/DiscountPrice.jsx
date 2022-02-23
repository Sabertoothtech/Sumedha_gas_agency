import React, { useState, useEffect } from "react";
import { getdiscounrSetGasPriceAPI } from "../../../../Utils/utils";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import Button from "@mui/material/Button";

function DiscountPrice() {
  const [updateddasprice, setupdateddasprice] = useState([]);

  // const [openeDdit, setopeneDdit] = useState([]);

  const updateFieldChanged = (index) => (e) => {
    let newArr = [...updateddasprice];
    let name_inp = e.target.name;
    let value = e.target.value;
    if (name_inp === "name"){
      newArr[index].amount = value;
    } else if (name_inp === "name1") {
      newArr[index].cgst = value;
    } else {
      newArr[index].sgst = value;
    }
    setupdateddasprice(newArr);
  };

  useEffect(() => {
    const config = {
      url: getdiscounrSetGasPriceAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setupdateddasprice(
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

  const postDataDiscountFunction = async () => {
    var FormDatas = new FormData();
   
    FormDatas.append(
      "cylinder_discount_gas_price_id",
      JSON.stringify(
        updateddasprice.map((ele) => ({
          cylinder_type_id: ele.id,
          amount: ele.amount,
          cgst: ele.cgst,
          sgst: ele.sgst,
        }))
      )
    );
    const config = {
      url: getdiscounrSetGasPriceAPI,
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
          });
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
            {updateddasprice.map((ele, id) => (
              <tr key={id}>
                <td>
                  <small style={{ margin: "0px", padding: "0px" }}>
                    {ele.name}
                  </small>
                  <br />
                  <input
                  style={{outline:"none"}}
                    name="name"
                    defaultValue={ele.amount}
                    onChange={updateFieldChanged(id)}
                    type="text"
                  />
                </td>
                <td>
                  <input
                  style={{outline:"none"}}
                    defaultValue={ele.cgst}
                    name="name1"
                    onChange={updateFieldChanged(id)}
                    style={{ width: "90px", marginTop: "14px" }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                  style={{outline:"none"}}
                    defaultValue={ele.sgst}
                    name="name2"
                    onChange={updateFieldChanged(id)}
                    style={{ width: "90px", marginTop: "14px" }}
                    type="text"
                  />
                </td>
              </tr>
            ))}
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
          marginTop:"25px"
         
        }}
        variant="contained"
      
          onClick={postDataDiscountFunction}
        >
          Edit Price
        </Button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default DiscountPrice;
