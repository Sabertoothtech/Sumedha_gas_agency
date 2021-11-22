import React from "react";

function SmallAllAgencyContainer(props) {
  const small_all_agency_container__main = {
    width: "230px",
    height: "90px",
    borderRadius: "15px",
    display: "flex",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "3px 15px ",
    flexDirection:"column",
    marginTop:"20px",
    marginBottom:"20px"
  };
  const small_all_agency_data={
    marginTop:"8px",
    display: "flex",
    flexDirection:"column" 
  }

  return <div onClick={()=>props.setShowAgencyBool(true)} style={small_all_agency_container__main}>
      <strong style={{color:"rgb(34, 9, 146)", fontWeight:"530"}}>{props.aname}</strong>
      <div style={small_all_agency_data}>
          <small style={{ margin:"0px", padding:"0px",}}>Agency ID:{props.aid}</small>
          <small style={{ margin:"0px", padding:"0px",}}>Contact: {props.acontact}</small>
          <small style={{ margin:"0px", padding:"0px",}}>Email: {props.aemail}</small>
      </div>
  </div>;
}

export default SmallAllAgencyContainer;
