import React, { useEffect, useState } from "react";
import "./ManageVender.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getvendorAPI } from "../../../../Utils/utils";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function ManageVender({
  setshowAddVendor,
  setvendorupdateID,
  setshowUpdateVendor,
}) {
  const [getvendordata, setgetvendordata] = useState([]);
  // const notify = () => toast("Wow so easy!");
  const deleteAPI = async(id) => {
    var FormDatas = new FormData();
    FormDatas.append("id", id);
    const config = {
      url: getvendorAPI,
      method: "delete",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    await axios(config)
      .then((res) => {
        toast.success('Vendor sucessfully deleted', {
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

  const getAPI = async () => {
    const config = {
      url: getvendorAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          setgetvendordata(
            res.data.map((item) => ({
              id: item.id,
              name: item.vendor_name,
            }))
          );
        }
      })
      .catch((err) => {
        // alert("err");
      });
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="manage_vandor_container">
      <small style={{ color: "gray", fontSize: "small" }}>Manage Vendor</small>
      <div className="all_vendor_list">
        {getvendordata.map((ele, key) => (
          <div key={key} className="vendor_name_data">
            <small>{ele.name}</small>
            <div className="manage_vendor_icon">
              <EditIcon
                onClick={() => {
                  setvendorupdateID(ele.id);
                  setshowUpdateVendor(true);
                }}
                className="icon-vendor"
              />
              <DeleteIcon onClick={()=>deleteAPI(ele.id)} />
            </div>
          </div>
        ))}
      </div>
      <Button
        style={{
          backgroundColor: "rgb(34, 9, 146)",
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "capitalize",
          position: "relative",
          marginTop: "50px",
          left: "35%",
        }}
        onClick={() => setshowAddVendor(true)}
        variant="contained"
      >
        Add Driver
      </Button>
      <ToastContainer />
    </div>
  );
}

export default ManageVender;
