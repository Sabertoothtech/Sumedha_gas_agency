import React, { useEffect, useState } from "react";
import "./GenerateOrder.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import {
  getGasAPI,
  addDriverAPI,
  getAgencyAPI,
  getEccessoriesAPI,
  postOrderAPI,
} from "../.././../Utils/utils";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function GenerateOrder({ setshowOrderBoolean }) {
  const [agency, setagency] = useState([]);
  const [driver, setdriver] = useState([]);
  const [gas, setgas] = useState([]);
  const [access, setaccess] = useState([]);

  const [postDataOrder, setpostDataOrder] = useState({
    driverID: "",
    agencyID: "",
    gasID: "",
    accessoriesID: "",
    accessories_number: "",
    gas_number: "",
    collection_request: "False",
    deduct_amount_from_deposit: "False",
  });

  async function postOrderfun() {
    var FormDatas = new FormData();
    FormDatas.append(
      "cylinder_generate_order",
      JSON.stringify([
        {
          cylinder_type_id: parseInt(postDataOrder.gasID),
          quantity: parseInt(postDataOrder.gas_number),
        },
      ])
    );
    FormDatas.append(
      "accessories_generate_order",
      JSON.stringify([
        {
          accessories_id: parseInt(postDataOrder.accessoriesID),
          quantity: parseInt(postDataOrder.accessories_number),
        },
      ])
    );
    FormDatas.append("agency_id", parseInt(postDataOrder.agencyID));
    FormDatas.append("driver_id", parseInt(postDataOrder.driverID));
    FormDatas.append("collection_request", postDataOrder.collection_request);
    FormDatas.append(
      "deduct_amount_from_deposit",
      postDataOrder.deduct_amount_from_deposit
    );

    // console.log("cccccccccccccccccc", FormDatas);

    const config = {
      url: postOrderAPI,
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
  const getAccess = async () => {
    const config = {
      url: getEccessoriesAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        const accessData = res.data.map((ele, idx) => ({
          id: ele.id,
          name: ele.product_name,
        }));
        setaccess(accessData);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  console.log("aaaaaaaaaaaaaaaffffffffffffff", postDataOrder);

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
    getAgency();
    getDriver();
    getGas();
    getAccess();
  }, []);
  return (
    <div className="order__container_post">
      <div className="myorder_main_post">
        <ClearIcon
          onClick={() => setshowOrderBoolean(false)}
          className="show_myorder_post_crossbutton"
        />
        <div className="show_myorder_post_heading">
          <strong>Generate Order</strong>
        </div>
        <div className="myoredr_item_post_box">
          <select
            onChange={(e) =>
              setpostDataOrder({ ...postDataOrder, agencyID: e.target.value })
            }
          >
            <option value="">Agency</option>
            {agency.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <select
            onChange={(e) =>
              setpostDataOrder({ ...postDataOrder, gasID: e.target.value })
            }
          >
            <option value="">Type of Cylinder</option>
            {gas.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <select
            onChange={(e) =>
              setpostDataOrder({ ...postDataOrder, driverID: e.target.value })
            }
          >
            <option value="">Driver</option>
            {driver.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
            {/* console.log("vvvvvvvvvvvvvvvvmmmmmmmmmmmm",) */}
          </select>

          <select
            onChange={(e) =>
              setpostDataOrder({
                ...postDataOrder,
                accessoriesID: e.target.value,
              })
            }
          >
            <option value="">Accessories</option>
            {access.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Accessories Ouantity"
            onChange={(e) =>
              setpostDataOrder({
                ...postDataOrder,
                accessories_number: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Cylinder Qunatity"
            onChange={(e) =>
              setpostDataOrder({ ...postDataOrder, gas_number: e.target.value })
            }
          />
          <div className="post_order_text">
            <div>
              <span>Note:</span>
              <p>Item autometic get subtracted from inventory</p>
            </div>
            <div>
              <input
                onChange={(e) =>
                  setpostDataOrder({
                    ...postDataOrder,
                    collection_request: e.target.value,
                  })
                }
                className="checkbox_myorder_post"
                style={{ borderRadius: "50%" }}
                type="checkbox"
                name="vehicle1"
                value="True"
              />
              <label style={{ marginRight: "20px" }} for="vehicle1">
                Generate Collection Order
              </label>
              <br />

              <input
                onChange={(e) =>
                  setpostDataOrder({
                    ...postDataOrder,
                    deduct_amount_from_deposit: e.target.value,
                  })
                }
                className="checkbox_myorder_post"
                type="checkbox"
                name="vehicle1"
                value="True"
              />
              <label style={{ marginRight: "20px" }} for="vehicle1">
                Deduct amount from deposite
              </label>
            </div>
          </div>

          <Button
            style={{
              width: "300px",
              marginTop: "35px",
              display: "block",
              padding: "10px",
            }}
            variant="contained"
            color="success"
            onClick={() => postOrderfun()}
          >
            Save
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default GenerateOrder;
