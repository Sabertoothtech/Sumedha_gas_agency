import React, { useState, useEffect } from "react";
import "./AddDriver.css";
import "./UpdateDriver.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUpdateDriverAPI } from "../../../../Utils/utils";
import { getdriverIDAPI } from "../../../../Utils/utils";

function UpdateDriver({ setShowCon, setShowupdateCon, udDriverId }) {
  const [adDriverId, setAdDriverId] = useState("");
  const [adname, setAdName] = useState("");
  const [adEmpId, setAdEmpId] = useState("");
  const [adDLN, setAdDLN] = useState("");
  const [adEmail, setAdEmail] = useState("");
  const [adContact, setAdContact] = useState("");
  const [adACN, setAdACN] = useState("");
  const [adAVN, setAdAVN] = useState("");
  const [stadPass, setAdPass] = useState("");
  const [date, setdate] = useState("");

  // const [updateDriverData,setUpdateDriverData] = useState([])

  useEffect(() => {
    const config = {
      url: `${getdriverIDAPI}${udDriverId}/`,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setAdDriverId(res.data.id);
        setAdName(res.data.name);
        setAdContact(res.data.contact_no);
        setAdEmpId(res.data.employee_id);
        setAdACN(res.data.alternate_contact_no);
        setAdDLN(res.data.driving_licence_no);
        setAdAVN(res.data.alloted_vehicle_no);
        setAdEmail(res.data.email);
        setAdPass(res.data.password);
        setdate(res.data.date);
      })

      .catch((err) => alert(err));
  }, []);

  const addDriverClick = async () => {
    const config = {
      url: addUpdateDriverAPI,
      method: "PUT",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: {
        driver_id: adDriverId,
        name: adname,
        contact_no: adContact,
        employee_id: adEmpId,
        alternate_contact_no: adACN,
        driving_licence_no: adDLN,
        alloted_vehicle_no: adAVN,
        email: adEmail,
        password: stadPass,
      },
    };
    await axios(config)
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
    // .catch((err) => alert(err));
  };
  return (
    <div className=" add_driver__main">
      <div className="add_driver__container">
        <div className="add_driver_cancleBtn">
          <ClearIcon
            className="add_driver_clearbtn"
            onClick={() => setShowupdateCon(false)}
            style={{ color: "black" }}
          />
        </div>
        <strong>Update Driver</strong>
        <div className="add_driver_driverData">
          <div className="add_driver_left_data">
            <label className="update_driver_label" htmlFor="">
              Name:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdName(e.target.value)}
              defaultValue={adname}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Driver Id:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdDriverId(e.target.value)}
              defaultValue={adDriverId}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Employee Id:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdEmpId(e.target.value)}
              defaultValue={adEmpId}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Driving licence no:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdDLN(e.target.value)}
              defaultValue={adDLN}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Email:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdEmail(e.target.value)}
              defaultValue={adEmail}
              type="text"
            />
          </div>
          <div className="add_driver_right_data">
            <label className="update_driver_label" htmlFor="">
              Contact no:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdContact(e.target.value)}
              defaultValue={adContact}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Alternate contact no:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdACN(e.target.value)}
              defaultValue={adACN}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Alloted vehicle no:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdAVN(e.target.value)}
              defaultValue={adAVN}
              type="text"
            />

            <label className="update_driver_label" htmlFor="">
              Password:
            </label>
            <input
              className="update_driver_class"
              onChange={(e) => setAdPass(e.target.value)}
              type="text"
            />

            <Button
              onClick={addDriverClick}
              style={{ marginTop: "40px", width: "90%" }}
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateDriver;
