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
import { financeReceiveCompanyAPI } from "../../Utils/utils";
import axios from "axios";

function Finance() {
  const [showRdetail, setshowRdetail] = useState(false);
  const [showPdetail, setshowPdetail] = useState(false);

  const [RConpanyData, setRConpanyData] = useState([]);
  const [receiveDetailsData, setreceiveDetailsData] = useState();
  const [PConpanyData, setPConpanyData] = useState([]);

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
            date: data.agency_details.date,
            amount: data.agency_details.total_amount,
            transaction: data.last_transactions.last_transactions,
            invoices: data.last_invoices.last_invoices,
            id: data.agency_details.id,
          }))
        );
      })
      .catch((err) => {
        // alert("wrong");
      });
  };

  useEffect(() => {
    getReceiveDetails();
  }, []);

  return (
    <div className="finance__main">
      <LeftSidebar />
      <div className="finance__container">
        <div className="finance_main_container">
          <FinanceHeader />
          <hr style={{ color: "#f5f5f5" }} />
          <div className="finance_progressbar_container">
            <DataCircleGraph bgcolor="#006400" icon={TrendingUpIcon} />
            <DataCircleGraph bgcolor="#dc143c" icon={TrendingDownIcon} />
            <ProgressbarContainer title="Amount to receive" />
            <ProgressbarContainer title="Payable amount" />
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
                  <PayDetails setshowPdetail={setshowPdetail} />
                ) : (
                  <CompanyPayable setshowPdetail={setshowPdetail} />
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
