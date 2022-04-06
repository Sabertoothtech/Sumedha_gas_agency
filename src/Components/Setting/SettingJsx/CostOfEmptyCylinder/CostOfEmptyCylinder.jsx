import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { costofemptycylinderAPI } from "../../.././../Utils/utils";

function CostOfEmptyCylinder() {
  const [costofData, setcostofData] = useState([]);
  const getAPI = async () => {
    const config = {
      url: costofemptycylinderAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        if (res.status === 200) {
          setcostofData(
            res.data.map((data) => ({
              id: data.cost_of_empty_cylinder.cylinder_type_id.id,
              cost: data.cost_of_empty_cylinder.cost,
              name: data.cost_of_empty_cylinder.cylinder_type_id.name,
            }))
          );
        }
      })
      .catch((err) => {
        // alert(err);
      });
  };

  const updateFieldChanged = (index) => (e) => {
    let newArr = [...costofData];
    let name_inp = e.target.name;
    let value = e.target.value;
    // if (name_inp === "name"){
    //   newArr[index].amount = value;
    // } else if (name_inp === "name1") {
    //   newArr[index].cgst = value;
    // } else {
    //   newArr[index].sgst = value;
    // }
    newArr[index].cost = value;
    setcostofData(newArr);
  };

  const postAPI = async () => {
    var FormDatas = new FormData();
    FormDatas.append(
      "cost_of_empty_cylinder",
      JSON.stringify(
        costofData.map((data) => ({
          cylinder_type_id: data.id,
          amount: data.cost,
        }))
      )
    );

    const config = {
      url: costofemptycylinderAPI,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      data: FormDatas,
    };
    await axios(config)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Updated sucessfully", {
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
        toast.error("someting went wrong", {
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

  //   const postAPI = async () => {
  //     const config = {
  //       url: costofemptycylinderAPI,
  //       method: "GET",
  //       headers: {
  //         Authorization: `Token ${sessionStorage.getItem("token")}`,
  //       },
  //     };
  //     await axios(config)
  //       .then((res) => {
  //         alert(res.data);
  //       })
  //       .catch((err) => {
  //         alert(err);
  //       });
  //   };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div>
      <small style={{ color: "gray" }}>Cost of empty cylinders</small>
      <br />
      <br />

      {costofData.map((ele, id) => (
        <div id={id}>
          <label
            name="coec_label"
            style={{ margin: "0px", padding: "0px", fontSize: "small" }}
            htmlFor=""
          >
            {ele.name}
          </label>
          <input
            style={{
              margin: "0px",
              padding: "0px",
              border: "1px solid gray",
              padding: "8px 0px",
              borderRadius: "5px",
              width: "90%",
              outline: "none",
            }}
            name="coecinput"
            defaultValue={ele.cost}
            onChange={updateFieldChanged(id)}
            type="text"
          />
          <br />

          <br />
        </div>
      ))}

      <Button
        style={{
          backgroundColor: "rgb(34, 9, 146)",
          fontSize: "10px",
          fontWeight: "600",
          textTransform: "capitalize",
          padding: "8px 50px",
          position: "relative",
          left: "35%",
        }}
        variant="contained"
        onClick={postAPI}
      >
        Edit Prices
      </Button>
      <ToastContainer />
    </div>
  );
}

export default CostOfEmptyCylinder;
