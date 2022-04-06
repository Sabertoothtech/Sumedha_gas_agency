import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./Accessories.css";
import AccessoriesHeader from "./AccessoriesHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getEccessoriesAPI, base_url } from "../../Utils/utils";
import AccessoriesAddProduct from "./AccessoriesAddProduct";
import UpdateAccessories from "./UpdateAccessories";
import EditIcon from "@mui/icons-material/Edit";
import MobNavbar from "../../CommonComponents/MobNavbar";

function Accessories() {
  const matches = useMediaQuery("(max-width:1100px)");
  const [getEccessArray, setGetEccessArray] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [updateAProduct, setUpdateAProduct] = useState(false);
  const [idForUpdate, setIdForUpdate] = useState(0);

  const accessories_4_small__main = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    width: "400px",
    height: "115px",
    marginTop: "20px",
    borderRadius: "10px",
    padding: "10px",
  };
  const imgDiv = {
    width: "100px",
    // maxWidth: "100px",
  };

  const accessories_4_small_Editicon = {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  };
  const accessories_4_small_Item = {
    width: "100%",
    // border: "2px solid red",
    display: "flex",
    alignItems: "center",
  };

  const accessories_4_small_image = {
    marginLeft: "30px",
    marginRight: "30px",
    display: "flex",
  };
  const accessories_4_small_data = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "35px",
    color: "gray",
    lineHeight: "1.6",
  };

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
            proid: ele.id,
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
      {matches ? null : <LeftSidebar />}
      <div className="accessories__container">
        {matches ? <MobNavbar /> : null}
        <div className="accessories_main_container">
          <AccessoriesHeader setAddProduct={setAddProduct} />
          <hr style={{ color: "#f5f5f5" }} />

          <div className="accessories_all_container">
            {updateAProduct ? (
              <UpdateAccessories
                idForUpdate={idForUpdate}
                setUpdateAProduct={setUpdateAProduct}
              />
            ) : addProduct ? (
              <AccessoriesAddProduct setAddProduct={setAddProduct} />
            ) : (
              getEccessArray.map((ele, idx) => (
                <div style={accessories_4_small__main}>
                  <div style={accessories_4_small_Editicon}>
                    <EditIcon
                      style={{ color: "gray" }}
                      fontSize="small"
                      onClick={() => {
                        setUpdateAProduct(true);
                        setIdForUpdate(ele.proid);
                      }}
                    />
                  </div>
                  <div style={accessories_4_small_Item}>
                    {/* <img src="data:image/jpeg;base64,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" width="80%" height="100%" alt="" /> */}
                    <div style={{ imgDiv }}>
                      <img
                        src={`${base_url}${ele.image}`}
                        style={{ width: "100px", height: "95%" }}
                        alt={ele.proname}
                      />
                    </div>
                    <div style={accessories_4_small_data}>
                      <h4
                        style={{
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {ele.proname}
                      </h4>
                      <small style={{ margin: "0px", padding: "0px" }}>
                        Price: Rs.{ele.price}
                      </small>
                      <small style={{ margin: "0px", padding: "0px" }}>
                        In stock: {ele.quantity}
                      </small>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
