import React, { useState, useEffect } from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./MyOrder.css";
import Header from "../MyOrder/container/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobNavbar from "../../CommonComponents/MobNavbar";
import GenerateOrder from "./container/GenerateOrder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { postOrderAPI } from "../../Utils/utils";

function MyOrder() {
  const matches = useMediaQuery("(max-width:1100px)");
  const [showOrderBoolean, setshowOrderBoolean] = useState(false);
  const [orderData, setorderData] = useState([]);

  const getOrderAgency = async () => {
    const config = {
      url: postOrderAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        const accessData = res.data.map((ele) => ({
          order_id: ele.id,
          date: ele.date,
          total_amount: ele.total_amount,
          total_selling_price_cylinder: ele.total_selling_price_cylinder,
          total_accessories_price: ele.total_accessories_price,
          collection_request: ele.collection_request,
          agency_id: ele.agency_id,
          driver_id: ele.driver_id,
        }));
        setorderData(accessData);
      })
      .catch((err) => {
        // alert(err);
      });
  };
  useEffect(() => {
    getOrderAgency();
  }, []);

  return (
    <div className="myorder__container">
      {matches ? null : <LeftSidebar />}
      <div className="myorder_item">
        {matches ? <MobNavbar /> : null}
        <div className="myorder_container_main">
          <div className="header_myoredr_con">
            <Header setshowOrderBoolean={setshowOrderBoolean} />
          </div>
          <hr style={{ color: "#f5f5f5" }} />

          {showOrderBoolean ? (
            <GenerateOrder setshowOrderBoolean={setshowOrderBoolean} />
          ) : (
            <div className="myorder_botton_container">
              <div className="myorder_botton_left_container">
                <div className="myorder_botton_left_all_container aactive">
                  RD Gas Agency1
                </div>
                <div className="myorder_botton_left_all_container inactive">
                  RD Gas Agency
                </div>
                <div className="myorder_botton_left_all_container inactive">
                  RD Gas Agency
                </div>
                <div className="myorder_botton_left_all_container in-active">
                  RD Gas Agency
                </div>
                <div className="myorder_botton_left_all_container inactive">
                  RD Gas Agency
                </div>
                <div className="myorder_botton_left_all_container inactive">
                  RD Gas Agency
                </div>
                <div className="myorder_botton_left_all_container inactive">
                  RD Gas Agency
                </div>
                {/* {orderData.map((data, idx) => (
                  <div className="myorder_botton_left_all_container  ">
                    {data.agency_id}
                  </div>
                ))} */}
              </div>
              <div className="myorder_botton_right_container">Right</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
