import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./Accessories.css";
import AccessoriesHeader from "./AccessoriesHeader";

import { getEccessoriesAPI } from "../../Utils/utils";
import AccessoriesAddProduct from "./AccessoriesAddProduct";
import UpdateAccessories from './UpdateAccessories'
import EditIcon from '@mui/icons-material/Edit';


function Accessories() {
  const [getEccessArray, setGetEccessArray] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [updateAProduct, setUpdateAProduct] = useState(false);
  const [idForUpdate, setIdForUpdate] = useState(0)

  const accessories_4_small__main = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    width: "400px",
    height: "100px",
    marginTop: "20px",
    borderRadius: "10px",
    padding: "10px"
}

const accessories_4_small_Editicon = {
    width: "100%",
    display: "flex",
    justifyContent: "end",
}
const accessories_4_small_Item = {
    width: "100%",
    // border: "2px solid red",
    display: "flex",
    alignItems: "center",

}

const accessories_4_small_image = {
    marginLeft: "30px",
    marginRight: "30px",
    display: "flex",
}
const accessories_4_small_data = {
    display: "flex",
    flexDirection: "column",
}

  useEffect(() => {
    const accessoriesGet = async () => {
      const config = {
        url: getEccessoriesAPI,
        method: "GET",
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      };
      await axios(config)
        .then((res) => {
          const accessData = res.data.map((ele, idx) => ({
            proid:ele.id,
            proname: ele.product_name,
            quantity: ele.quantity,
            price: ele.price,
            image: ele.product_image,
          }));
          setGetEccessArray(accessData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    accessoriesGet();
  }, []);

  return (
    <div className="accessories__main">
      <LeftSidebar />
      <div className="accessories__container">
        <div className="accessories_main_container">
          <AccessoriesHeader setAddProduct={setAddProduct} />
          <hr style={{ color: "#f5f5f5" }} />

          <div className="accessories_all_container">
            {
              updateAProduct? <UpdateAccessories idForUpdate={idForUpdate} setUpdateAProduct={setUpdateAProduct}/>:
              addProduct ? (
              <AccessoriesAddProduct setAddProduct={setAddProduct}/>
            ) : (
              getEccessArray.map((ele, idx) => (

                <div style={accessories_4_small__main}>
                <div style={accessories_4_small_Editicon}><EditIcon style={{ color: "gray", fontSize: "20px" }} onClick={()=>{setUpdateAProduct(true); setIdForUpdate(ele.proid)} } /></div>
                <div style={accessories_4_small_Item}>
                    <img style={accessories_4_small_image} src={ele.image} alt="Image" />
                    <div style={accessories_4_small_data}>
                        <span style={{margin:"0px", padding:"0px"}}>{ele.proname}</span>
                        <small style={{margin:"0px", padding:"0px"}}>Price: Rs.{ele.price}</small>
                        <small style={{margin:"0px", padding:"0px"}}>In stock: {ele.quantity}</small>
                    </div>
                </div>
            </div>
                // <Accessories_4Small_container
                //   key={idx}
                //   proname={ele.proname}
                //   quantity={ele.quantity}
                //   image={ele.image}
                //   price={ele.price}
                //   id={ele.id}
                //   setUpdateAProduct={setUpdateAProduct}
                // />
              ))
            )
              
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
