import React from "react";

function CompanyPayable({setshowPdetail}) {
  const company_receivable__main = {
    border: "2px solid gray",
    width: "100%",
    height: "35px",
    borderRadius: "5px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <>
      <div onClick={()=> setshowPdetail(true)} style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>

      <div style={company_receivable__main}>
        <small>RD AGENCY</small>
        <small>10/10/2010</small>
        <small>Rs. 1200</small>
      </div>
    </>
  );
}

export default CompanyPayable;
