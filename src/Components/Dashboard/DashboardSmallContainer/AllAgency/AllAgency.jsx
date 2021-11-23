import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { getAgencyAPI } from "../../../../Utils/utils";
import "./AllAgency.css";
import SmallAllAgencyContainer from "./SmallAllAgencyContainer";
import ShowParticularAgency from "./ShowParticularAgency";

function AllAgency() {
  const [allagecydataArray, setAllagencydataArray] = useState([]);
  const [showAgencyBool, setShowAgencyBool] = useState(false);

  useLayoutEffect(() => {
    const config = {
      url: getAgencyAPI,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        setAllagencydataArray(
          res.data.map((aname, idx) => ({
            agency_name: aname.data.agency_details.agency_name,
            agency_id: aname.data.agency_details.agency_id,
            agency_contact: aname.data.agency_details.contact_no,
            agency_email: aname.data.agency_details.email,
          }))
        );
      })
      .catch((err) => console.log("error"));
  }, []);

  return (
    
      showAgencyBool? <ShowParticularAgency setShowAgencyBool={setShowAgencyBool} /> :
      <div className="all_agency__main">
      {allagecydataArray.map((ele, idx) => (
        <SmallAllAgencyContainer
        showAgencyBool={showAgencyBool}
        setShowAgencyBool={setShowAgencyBool}
          aname={ele.agency_name}
          aid={ele.agency_id}
          acontact={ele.agency_contact}
          aemail={ele.agency_email}
        />
      ))}
    </div>
    
  );
}

export default AllAgency;
