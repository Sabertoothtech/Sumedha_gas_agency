import React, { useState, useEffect } from "react";
import "../ManageDriver/ManageDriver.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";
import { getAgencyAPI } from "../../../../Utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageAgency(props) {
  const [nameagencyArray, setnameagencyArray] = useState([]);
  const [refresh, setrefresh] = useState(true);

  const agencyDelete = async (id) => {
    var FormDatas = new FormData();
    FormDatas.append("agency_id", id);
    const config = {
      url: getAgencyAPI,
      method: "delete",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    await axios(config)
      .then((res) => {
        console.log(res);
        toast.success("Agency sucessfully deleted", {
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
  };

  useEffect(() => {
    const config = {
      url: getAgencyAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setnameagencyArray(
          res.data.map((aname, idx) => ({
            agency_name: aname.data.agency_details.agency_name,
            agency_id: aname.data.agency_details.id,
          }))
        );
      })
      .catch((err) => console.log("error"));
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
        Manage Agency
      </small>
      {nameagencyArray.map((name, id) => (
        <div className="manage_driver_name_icon">
          <small>{name.agency_name}</small>
          <div className="manage_icon">
            <EditIcon
              fontSize="small"
              style={{
                marginRight: "10px",
              }}
            />
            <DeleteIcon
              fontSize="small"
              onClick={() => {
                agencyDelete(name.agency_id);
                refresh ? setrefresh(false) : setrefresh(true);
              }}
            />
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
            padding: "8px 50px",
          }}
          onClick={() => props.setshowAddAgency(true)}
          variant="contained"
        >
          Add new
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ManageAgency;
