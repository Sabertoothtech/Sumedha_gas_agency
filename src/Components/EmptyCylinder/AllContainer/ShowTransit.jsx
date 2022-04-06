import React, { useEffect, useState } from "react";
import "./ShowTransit.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import {
  getGasAPI,
  addDriverAPI,
  getEmptyCylinderTransit,
} from "../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowTransit({ setShowTransit }) {
  const [driver, setdriver] = useState([]);
  const [gas, setgas] = useState([]);
  const [transitPostData, settransitPostData] = useState({
    driver_id: "",
    gas_id: "",
    cylinderQuqntity: "",
    gas_price_per_kg: "",
    total_amount: "",
  });

  async function postShowTransit() {
    var FormDatas = new FormData();
    FormDatas.append("driver_id", transitPostData.driver_id);
    FormDatas.append("gas_price_per_kg", transitPostData.gas_price_per_kg);
    FormDatas.append("total_amount", transitPostData.total_amount);
    FormDatas.append(
      "empty_cylinder_in_transit_quantity",
      JSON.stringify([
        {
          cylinder_type_id: transitPostData.gas_id,
          quantity: transitPostData.cylinderQuqntity,
        },
      ])
    );

    const config = {
      url: getEmptyCylinderTransit,
      method: "POST",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };

    await axios(config)
      .then((res) => {
        toast.success(" sucess", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", transitPostData);

  async function getDriver() {
    const config = {
      url: addDriverAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        // console.log(res.data[18].name)
        const ddname = res.data.map((dname, idx) => ({
          name: dname.name,
          id: dname.id,
        }));
        setdriver(ddname);
      })
      .catch((err) => console.log(err));
  }

  async function getGas() {
    const config = {
      url: getGasAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        // console.log(res.data[18].name)
        const ddname = res.data.map((dname, idx) => ({
          id: dname.id,
          name: dname.name,
        }));
        setgas(ddname);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDriver();

    getGas();
  }, []);
  return (
    <div className="show_transit__main">
      <div className="show_transit_container">
        <ClearIcon
          onClick={() => setShowTransit(false)}
          className="show_colloect_crossbutton"
        />
        <div className="show_transit_heading">
          <strong>Add Request</strong>
        </div>

        <div className="both_item_container_transit">
          <select
            name=""
            id=""
            onChange={(e) =>
              settransitPostData({
                ...transitPostData,
                driver_id: e.target.value,
              })
            }
          >
            <option value="">Driver</option>
            {driver.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <select
            name=""
            id=""
            onChange={(e) =>
              settransitPostData({
                ...transitPostData,
                gas_id: e.target.value,
              })
            }
          >
            <option value="">Type of cylinder</option>
            {gas.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
          <input
            onChange={(e) =>
              settransitPostData({
                ...transitPostData,
                cylinderQuqntity: e.target.value,
              })
            }
            type="number"
            placeholder="No of empty cylinder"
          />
          <input
            onChange={(e) =>
              settransitPostData({
                ...transitPostData,
                gas_price_per_kg: e.target.value,
              })
            }
            type="number"
            placeholder="Gas Price/KG"
          />
          <input
            onChange={(e) =>
              settransitPostData({
                ...transitPostData,
                total_amount: e.target.value,
              })
            }
            type="number"
            placeholder="Total Amount"
          />

          <Button
            className="transit_button_post"
            variant="contained"
            color="success"
            onClick={() => postShowTransit()}
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ShowTransit;
