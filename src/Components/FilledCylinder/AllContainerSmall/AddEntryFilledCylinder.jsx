import { borderRadius } from "@mui/system";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

function AddEntryFilledCylinder({ setShowAddEntryFilledCylinder }) {
  const add_entry_filled_cylinder__main = {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
  };

  const add_entry_filled_cylinder__container = {
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    width: "450px",
    height: "350px",
    marginTop: "100px",
    borderRadius: "10px",
    padding: "10px",
  };

  const input_lable_fc = {
    margin: "0px",
    padding: "0px",
  };

  const div_input_button_fc = {
    margin: "auto",
    width: "80%",
    color:"gray",
    
  };

  return (
    <div style={add_entry_filled_cylinder__main}>
      <div style={add_entry_filled_cylinder__container}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            color:"gray"
          }}
        >
          <ClearIcon onClick={() => setShowAddEntryFilledCylinder(false)} />
          
        </div>
        <small style={{margin:"auto" }}>New Entry</small>
        <div style={div_input_button_fc}>
          <label style={input_lable_fc} htmlFor="">
            Select Type of Cylinder
          </label>
          <input style={input_lable_fc} type="text" /> <br />
          <br />
          <label style={input_lable_fc} htmlFor="">
            Ouantity
          </label>
          <input style={input_lable_fc} type="text" /> <br />
          <br />
          <label style={input_lable_fc} htmlFor="">
            Date
          </label>
          <input style={input_lable_fc} type="text" /> <br /><br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button style={{padding:" 8px 60px", textTransform:"capitalize"}} variant="contained" color="success">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEntryFilledCylinder;
