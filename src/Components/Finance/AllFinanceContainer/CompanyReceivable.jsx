import React,{useEffect,useState} from "react";
import axios from "axios";
import {financeReceiveCompanyAPI} from '../../../Utils/utils'

function CompanyReceivable({setshowRdetail,RConpanyData,setreceiveDetailsData}) {

  
 
  const company_receivable__main = {
    border: "1px solid gray",
    width: "100%",
    height: "40px",
    borderRadius: "5px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      background: "red"
    },
  };
  return (
    <>
    {RConpanyData.map((ele,key)=>(
     
      <tr key={key} onClick={()=> {setshowRdetail(true); setreceiveDetailsData({id:ele.id,name:ele.agency_name,amount:ele.amount,transaction:ele.transaction,invoices:ele.invoices})}} style={{display:"flex", justifyContent:"space-between", border: "1px solid gray", paddingRight:"20px", paddingLeft:"20px",paddingBottom:"8px",borderRadius: "5px",}}>
        {ele.amount===null?ele.amount=0:""}
        <td align="left" ><small>{ele.agency_name}</small></td>
        <td align="center"><small>{ele.date}</small></td>
        <td align="left"><small>{ele.amount}</small></td>
      </tr>
      
      
    //    <div onClick={()=> setshowRdetail(true)} style={company_receivable__main}>
    //      {ele.amount===null?ele.amount=0:""}
    //    <small style={{maxWidth:"30%",alignItems: 'center'}}>{ele.agency_name}</small>
    //    <small>{ele.date}</small>
    //    <small  style={{maxWidth:"30%",alignItems: 'center'}}>{ele.amount}</small>
    //  </div>
      
    ))}
      
    </>
  );
}

export default CompanyReceivable;
