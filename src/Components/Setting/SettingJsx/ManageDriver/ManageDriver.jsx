import React, { useState, useEffect } from "react";
import "./ManageDriver.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";
import { addDriverAPI } from "../../../../Utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageDriver(props) {
  const [showDriverName, setShowDriverName] = useState([]);
  const [refresh, setrefresh] = useState(true)

  const addDriverClick = () => {
    props.setdriverPopUp(true);
  };

  const deleteAPI =async(id) => {
    var FormDatas = new FormData();
    FormDatas.append("driver_id", id);
    const config = {
      url: addDriverAPI,
      method: "delete",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    await axios(config)
      .then((res) => {
        console.log(res)
        toast.success('Driver sucessfully deleted', {
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

  useEffect(() => {
    const config = {
      url: addDriverAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        // console.log(res.data[18].name)
        const ddname = res.data.map((dname, idx) => ({
          drivername: dname.name,
          driverid:dname.id
        }));
        setShowDriverName(ddname);
      })
      .catch((err) => console.log(err));
  }, [refresh]);
  return (
    <div className="manage_driver__main">
      <small
        style={{
          fontWeight: "500",
          letterSpacing: "1px",
          marginBottom: "20px",
        }}
      >
        Manage Driver
      </small>
      {showDriverName.map((name, id) => (
        <div key={id} className="manage_driver_name_icon">
          <small>{name.drivername}</small>
          <div className="manage_icon">
            <EditIcon style={{marginRight:"10px"}}  onClick={() =>{ props.setupdatePopUp(true); props.setUpDriverId(name.driverid) }} />
            <DeleteIcon onClick={()=> {deleteAPI(name.driverid);refresh? setrefresh(false):setrefresh(true)}} />
          </div>
        </div>
      ))}
      <div className="manage_button">
        <Button
          style={{
            backgroundColor: "rgb(34, 9, 146)",
            fontSize: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
          onClick={addDriverClick}
          variant="contained"
        >
          Add Driver
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ManageDriver;
