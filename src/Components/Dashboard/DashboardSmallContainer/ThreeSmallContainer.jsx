import { height } from "@mui/system";
import React from "react";
import MovingIcon from "@mui/icons-material/Moving";
import useMediaQuery from '@mui/material/useMediaQuery';

function ThreeSmallContainer({ trandingicon, bgcolor, color }) {
  const matches = useMediaQuery('(max-width:1200px)');
  const tscm = {
    minWidth:matches?"200px": "230px",
    height: "90px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "3px 15px ",
    margin:"5px"
   
  };
  const three_small_container_icon = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: bgcolor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const three_small_container_text = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };
  return (
    <div style={tscm} className="three_small_container__main">
      <div style={three_small_container_text}>
        <small
          style={{
            margin: "0px",
            padding: "0px",
            marginTop: "0px",
            fontSize: "13px",
            fontWeight: "350",
          }}
        >
          Total sales
        </small>
        <span style={{ margin: "0px", padding: "0px" }}>23456</span>
        <div className="three_small_container_row_text">
          <small
            style={{
              margin: "0px",
              padding: "0px",
              marginRight: "10px",
              fontSize: "10px",
              fontWeight: "350",
              color: color,
            }}
          >
            +3.34%{" "}
          </small>
          <small
            style={{
              margin: "0px",
              padding: "0px",
              marginTop: "0px",
              fontSize: "10px",
              fontWeight: "350",
            }}
          >
            since last month
          </small>
        </div>
      </div>
      <div style={three_small_container_icon}>
        <MovingIcon style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default ThreeSmallContainer;
