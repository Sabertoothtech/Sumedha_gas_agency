import React, { useEffect, useState } from "react";
import "./ShowCollect.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import {
  getGasAPI,
  addDriverAPI,
  getAgencyAPI,
  getEmptyCylinderCollect,
} from "../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowCollect({ setShowCollect }) {
  const [agency, setagency] = useState([]);
  const [driver, setdriver] = useState([]);
  const [gas, setgas] = useState([]);

  const [colletPostData, setcolletPostData] = useState({
    agency_id: "",
    driver_id: "",
    gas_id: "",
    cylinderQuqntity: "",
  });

  async function postCollect() {
    var FormDatas = new FormData();
    FormDatas.append("agency_id", colletPostData.agency_id);
    FormDatas.append("driver_id", colletPostData.driver_id);
    FormDatas.append(
      "empty_cylinder_tocollect_id",
      JSON.stringify([
        {
          cylinder_type_id: colletPostData.gas_id,
          quantity: colletPostData.cylinderQuqntity,
        },
      ])
    );

    const config = {
      url: getEmptyCylinderCollect,
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
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", colletPostData);

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

  async function getAgency() {
    const config = {
      url: getAgencyAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        // console.log(res.data[18].name)
        const ddname = res.data.map((dname, idx) => ({
          name: dname.data.agency_details.agency_name,
          id: dname.data.agency_details.id,
        }));
        setagency(ddname);
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
    getAgency();
    getGas();
  }, []);
  return (
    <div className="show_collect__main">
      <div className="show_collect_container">
        <ClearIcon
          onClick={() => setShowCollect(false)}
          className="show_colloect_crossbutton"
        />
        <div className="show_collect_heading">
          <strong>Add Request</strong>
        </div>

        <div className="both_item_container_collect">
          <select
            name=""
            id=""
            onChange={(e) =>
              setcolletPostData({
                ...colletPostData,
                agency_id: e.target.value,
              })
            }
          >
            <option value="">Agency</option>
            {agency.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <select
            name=""
            id=""
            onChange={(e) =>
              setcolletPostData({
                ...colletPostData,
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
              setcolletPostData({
                ...colletPostData,
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
              setcolletPostData({
                ...colletPostData,
                cylinderQuqntity: e.target.value,
              })
            }
            type="number"
            placeholder="No of empty cylinder"
          />
        </div>

        <div className="show_collect_heading">
          <Button
            style={{
              width: "300px",
              marginTop: "35px",
              display: "block",
              padding: "10px",
            }}
            variant="contained"
            color="success"
            onClick={() => postCollect()}
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ShowCollect;
