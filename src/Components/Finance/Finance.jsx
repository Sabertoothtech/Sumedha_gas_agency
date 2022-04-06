import React, { useState, useEffect } from "react";
import "./Finance.css";
import LeftSidebar from "../Sidebar/LeftSidebar";
import FinanceHeader from "./AllFinanceContainer/FinanceHeader";
import ProgressbarContainer from "./AllFinanceContainer/ProgressbarContainer";
import DataCircleGraph from "./AllFinanceContainer/DataCircleGraph";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CompanyReceivable from "./AllFinanceContainer/CompanyReceivable";
import CompanyPayable from "./AllFinanceContainer/CompanyPayable";
import ReceiveDetails from "./AllFinanceContainer/ReceiveDetails";
import PayDetails from "./AllFinanceContainer/PayDetails";
import {
  financeReceiveCompanyAPI,
  getvenderAmountPayable,
} from "../../Utils/utils";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobNavbar from "../../CommonComponents/MobNavbar";

function Finance() {
  const matches = useMediaQuery("(max-width:1100px)");
  const [showRdetail, setshowRdetail] = useState(false);
  const [showPdetail, setshowPdetail] = useState(false);

  const [RConpanyData, setRConpanyData] = useState([]);
  const [receiveDetailsData, setreceiveDetailsData] = useState();

  const [PConpanyData, setPConpanyData] = useState([]);
  const [payableDetailsData, setPayableDetailsData] = useState();

  const sum = (id) => {
    const sumall = id
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0);
    return sumall;
  };

  const getReceiveDetails = async () => {
    const config = {
      url: financeReceiveCompanyAPI,
      method: "get",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        setRConpanyData(
          res.data.map((data) => ({
            agency_name: data.agency_name,
            date: data.due_date,
            amount: data.agency_details.deposited_amount,

            id: data.agency_details.id,
          }))
        );
      })
      .catch((err) => {
        // alert("wrong");
      });
  };

  const getPayableDetails = async () => {
    const config = {
      url: getvenderAmountPayable,
      method: "get",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    await axios(config)
      .then((res) => {
        setPConpanyData(
          res.data.map((data) => ({
            vendor_name: data.vendor_name,
            date: data.vendor_detail.date,
            amount: data.vendor_detail.amount_payable,
            last_transactions: data.last_transactions,
            invoices: data.last_invoices,
            id: data.vendor_detail.id,
          }))
        );
      })
      .catch((err) => {
        // alert("wrong");
      });
  };

  useEffect(() => {
    getReceiveDetails();
    getPayableDetails();
  }, []);
  // console.log("object,;;;;;;;,;;", PConpanyData);
  return (
    <div className="finance__main">
      {matches ? null : <LeftSidebar />}
      <div className="finance__container">
        {matches ? <MobNavbar /> : null}
        <div className="finance_main_container">
          <FinanceHeader />
          <hr style={{ color: "#f5f5f5" }} />
          <div className="finance_progressbar_container">
            <DataCircleGraph
              title="Case Inflow"
              percent="17%"
              bgcolor="#006400"
              icon={TrendingUpIcon}
            />
            <DataCircleGraph
              title="Case Outflow"
              percent="-9%"
              bgcolor="#dc143c"
              icon={TrendingDownIcon}
            />
            <ProgressbarContainer
              data={sum(RConpanyData)}
              title="Amount to receive"
            />
            <ProgressbarContainer
              data={sum(PConpanyData)}
              title="Payable amount"
            />
          </div>

          <div className="finance_both_table">
            <div className="finance_amount_receivable_table">
              <small>Amount Receivable</small>
              <div className="finance_receivable_company">
                {showRdetail ? (
                  <ReceiveDetails
                    receiveDetailsData={receiveDetailsData}
                    setreceiveDetailsData={setreceiveDetailsData}
                    setshowRdetail={setshowRdetail}
                  />
                ) : (
                  <CompanyReceivable
                    setreceiveDetailsData={setreceiveDetailsData}
                    RConpanyData={RConpanyData}
                    setshowRdetail={setshowRdetail}
                  />
                )}
              </div>
            </div>
            <div className="finance_amount_payable_table">
              <small>Amount Payable</small>
              <div className="finance_payable_company">
                {showPdetail ? (
                  <PayDetails
                    setshowPdetail={setshowPdetail}
                    payableDetailsData={payableDetailsData}
                  />
                ) : (
                  <CompanyPayable
                    PConpanyData={PConpanyData}
                    setshowPdetail={setshowPdetail}
                    setPayableDetailsData={setPayableDetailsData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
