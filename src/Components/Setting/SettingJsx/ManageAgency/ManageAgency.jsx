import React, { useState, useEffect } from "react";
import "../ManageDriver/ManageDriver.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";
import { getAgencyAPI } from "../../../../Utils/utils";

function ManageAgency(props) {
  const [nameagencyArray, setnameagencyArray] = useState([]);

  const addDriverClick = () => {
    props.setdriverPopUp(true);
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
            agency_id: aname.data.agency_details.agency_id,
          }))
        );
      })
      .catch((err) => console.log("error"));
  }, []);

  //     const config = {
  //       url: getAgencyAPI,
  //       method: "GET",
  //       headers: {
  //         Authorization: `Token ${sessionStorage.getItem("token")}`,
  //       },
  //     };
  //     axios(config)
  //       .then((res) => {
  //         // console.log(res.data[18].name)
  //         const ddname = res.data.map((dname, idx) => ({
  //           drivername: dname.name,
  //         }));
  //         setShowDriverName(ddname);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
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
            <EditIcon onClick={() => props.setupdatePopUp(true)} />
            <DeleteIcon />
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
            padding:"8px 50px"
          }}
          
          variant="contained"
        >
          Add new
        </Button>
      </div>
    </div>
  );
}

export default ManageAgency;
