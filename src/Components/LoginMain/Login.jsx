import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoginAPI } from "../../Utils/utils";
import axios from "axios";
import "./Login.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

function Login() {
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginBtnClick = async () => {
    if (email === "" || password === "") {
      setError("All Field are required");
    } else {
      const config = {
        url: LoginAPI,
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      };
      await axios(config)
        .then((res) => {
          if (res.data.token) {
            if (res.status === 200) {
              sessionStorage.setItem("token", res.data.token);
            }
          }
          window.location = "/dashboard";
        })
        .catch((err) => {
          setError("error");
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="logo_box">
            <div className="logo_img">
              <img src={logo} alt="logo" />
              <h3>SUMEDHA</h3>
            </div>
          </div>
          <strong style={{ color: "red", fontSize: "10px" }}>{error}</strong>
          <div className="input_box">
            <label className="label-login" htmlFor="">
              UserName
            </label>
            <input
              className="input-login"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
            />
            <label className="label-login" htmlFor="">
              Password
            </label>
            <input
              className="input-login"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="pass"
            />
            {showPassword ? (
              <VisibilityOffIcon
                fontSize="small"
                onClick={() => setshowPassword(false)}
                style={{ position: "relative", top: "-45px", left: "88%" }}
              />
            ) : (
              <RemoveRedEyeIcon
                onClick={() => setshowPassword(true)}
                style={{ position: "relative", top: "-45px", left: "88%" }}
                fontSize="small"
              />
            )}
          </div>

          <Button
            style={{
              backgroundColor: "rgb(34, 9, 146)",
              fontSize: "10px",
              fontWeight: "600",
              textTransform: "capitalize",
              padding: "10px 55px",
            }}
            variant="contained"
            onClick={loginBtnClick}
          >
            LOGIN
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
