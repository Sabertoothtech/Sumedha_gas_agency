import React, { useEffect,useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { costofemptycylinderAPI } from "../../.././../Utils/utils";

function CostOfEmptyCylinder() {
    const [costofData, setcostofData] = useState([])
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
        if(res.status===200){
            setcostofData(
                res.data.map((data)=>({
                    id:data.cost_of_empty_cylinder.cylinder_type_id.id,
                    cost:data.cost_of_empty_cylinder.cost,
                    name:data.cost_of_empty_cylinder.cylinder_type_id.name
                }))
            ) 
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateFieldChanged = (index) => (e) => {
    let newArr = [...costofData];
    let name_inp = e.target.name;
    let value = e.target.value;
    newArr[index] = value;

    setcostofData(newArr);
  };

const postAPI = async() => {
  // var FormDatas = new FormData();
  // costofData.map((ele) => ({
  //   FormDatas.append("cylinder_type_id":5)
  //   FormDatas.append("cost":45)
  // }))
  
  const config = {
    url: costofemptycylinderAPI,
    method: "POST",
    headers: {
      Authorization: `Token ${sessionStorage.getItem("token")}`,
    },
    // data: FormDatas,
  };
  await axios(config)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      alert(err);
    });

}

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
     
        {costofData.map((ele,idx)=>(
           <div id={idx}>
           <label style={{ margin: "0px", padding: "0px" }} htmlFor="">
           {ele.name}
         </label>
         <input style={{ margin: "0px", padding: "0px",border:"1px solid gray" }} defaultValue={ele.cost} onChange={updateFieldChanged} type="text" /> 
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
      >
        Edit Prices
      </Button>
    </div>
  );
}

export default CostOfEmptyCylinder;
