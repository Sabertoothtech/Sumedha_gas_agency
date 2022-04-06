import React, { useState } from "react";
import Button from "@mui/material/Button";
import { changepass } from "../../../../Utils/utils";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ChangePassword() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const inputsty = {
    width: "95%",
    border: "1px solid gray",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "5px",
    outline: "none",
  };
  const label_style = {
    fontSize: "small",
  };

  const changeAPI = () => {
    var FormDatas = new FormData();
    FormDatas.append("email", email);
    FormDatas.append("password", password);
    const config = {
      url: changepass,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    axios(config)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Password Updated sucessfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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
  return (
    <div>
      <small style={{ color: "gray" }}>Change Password</small>
      <div>
        <label style={label_style} htmlFor="">
          Email
        </label>
        <input
          style={inputsty}
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="text"
        />

        <label style={label_style} htmlFor="">
          Password
        </label>
        <input
          style={inputsty}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="text"
        />
        <Button
          style={{
            backgroundColor: "rgb(34, 9, 146)",
            fontSize: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
            padding: "8px 50px",
            marginTop: "40px",
            marginLeft: "30%",
          }}
          onClick={changeAPI}
          variant="contained"
        >
          Add new
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ChangePassword;
