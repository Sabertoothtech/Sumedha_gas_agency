import React from "react";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import LeftSidebar from "../../LeftSidebar";
import SettingTopHeader from "../../../Setting/SettingJsx/SettingTopHeader";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import MobNavbar from "../../../../CommonComponents/MobNavbar";

function Profile() {
  const matches = useMediaQuery("(max-width:1100px)");
  const history = useHistory();
  return (
    <div className="prfile__main">
      {matches ? null : <LeftSidebar />}
      <div className="profile__container">
        {matches ? <MobNavbar /> : null}
        <div className="profile_main_container">
          {matches ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0px 20px",
              }}
            >
              <SettingTopHeader pageName="Profile" />
              <Button
                onClick={() => {
                  sessionStorage.removeItem("token");
                  history.push("/");
                }}
                style={{ color: "red", border: "none" }}
                variant="outlined"
                color="success"
              >
                {" "}
                Logout
              </Button>
            </div>
          ) : (
            <SettingTopHeader pageName="Profile" />
          )}
          <hr style={{ color: "#f5f5f5" }} />

          <div className="profile_data_image_container">
            <div className="profile__image_container">
              <div className="profile__avtar">
                <Avatar
                  alt="Remy Sharp"
                  src="https://image.shutterstock.com/image-photo/young-confident-handsome-man-full-260nw-1416442523.jpg"
                  sx={{ width: 200, height: 200 }}
                  backgroundColor="rgba(0,0,0,0)"
                  style={{ border: 0, marginTop: "15px" }}
                />
                <Fab
                  style={{
                    marginTop: "-25px",
                    position: "relative",
                    fontSize: "30px ",
                    backgroundColor: "#006400",
                    color: "white",
                  }}
                  size="small"
                  aria-label="add"
                >
                  +
                </Fab>
              </div>
              <h2>John Cena</h2>
              <small>Nagpur, India</small>
            </div>
            <div className="profile__data_container">
              <label htmlFor="">Name: </label>
              <input value="John Cena" type="text" />
              <br />
              <br />
              <label htmlFor="">Email: </label>
              <input value="johncena@gmail.com" type="text" />
              <br />
              <br />
              <label htmlFor="">Contact: </label>
              <input value="+919191777" type="phone" />
              <br />
              <br />
              <label htmlFor="">Address: </label>
              <input value="Nagpur India (202001)" type="text" />
              <br />
              <br />
              <br />
              <div className="profile__button">
                <Button
                  style={{
                    textTransform: "capitalize",
                    padding: "10px 40px",
                    fontSize: "10px",
                    fontWeight: "530",
                    backgroundColor: "rgb(34, 9, 146)",
                    display: "flex",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                  variant="contained"
                >
                  Edit profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
