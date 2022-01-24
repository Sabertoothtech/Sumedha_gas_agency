import React,{useState,useEffect} from "react";
import LeftSidebar from "../Sidebar/LeftSidebar";
import "./EmptyCylinder.css";
import HeaderEmpty from "./AllContainer/HeaderEmpty";
import Small4FilledCylinder from "../FilledCylinder/AllContainerSmall/Small4FilledCylinder"
import Big4ContainerEmpty from "./AllContainer/Big4ContainerEmpty"
import {empty_instock} from "./../../Utils/utils"
import {empty_intransit} from "./../../Utils/utils"
import {empty_incollect} from "./../../Utils/utils"
import axios from "axios";
function EmptyCylinder() {

  const [changeSelectOption, setchangeSelectOption] = useState("In collect")
  const [APIchangeSelectOption, setAPIchangeSelectOption] = useState([])
  const [url, seturl] = useState(empty_instock)

  // if(changeSelectOption=="In stock"){
  //   seturl(empty_instock)
  // }
  // else if(changeSelectOption=="To collect"){
  //   seturl(empty_incollect)
  // }
  // else if(changeSelectOption=="In transit"){
  //   seturl(empty_intransit)
  // }

  useEffect(() => {
    
    
    console.log("main",url)
    const config = {
      url: url,
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data[0].data.quantity)
        const ddname = res.data.map((dname, idx) => ({
          empty_cylinder_tocollect_id: dname.data.empty_cylinder_tocollect_id.agency_id.agency_name,
          quantity:dname.data.quantity,
          date:dname.data.empty_cylinder_tocollect_id.date
        }));
        setAPIchangeSelectOption(ddname);
      })
      .catch((err) => console.log(err));
   
  }, [changeSelectOption,url])
  return (
    <div className="empty_cylinder__main">
      <LeftSidebar />
      <div className="empty_cylinder__container">
        <div className="empty_cylinder_main_container">
          <HeaderEmpty changeSelectOption={changeSelectOption} setchangeSelectOption={setchangeSelectOption}/>
          <hr style={{ color: "#f5f5f5" }} />
          <div className="empty_cylinder_3container">
              <Small4FilledCylinder bgcolor="#dc143c" color="#dc143c"/>
              <Small4FilledCylinder bgcolor="#00BFFF" color="#00BFFF"/>
              <Small4FilledCylinder bgcolor="#7b68ee" color="#7b68ee"/>
          </div>
          <div className="empty_cylinder_both_container">
              <div className="empty_cylinder_4_small_container">
                 <Big4ContainerEmpty/> 
              </div>
              <div className="empty_cylinder_1_changeable_container">
                <small style={{fontSize:"12px", color:"gray", marginBottom:"10px"}}>All cylinder in stock</small>
                <small style={{marginBottom:"15px"}}>Domestic 15kg</small>
                <table>
                  <tr style={{textAlign: "center"}}>
                    <td>Agency name</td>
                    <td>Date</td>
                    <td>Quantity</td>
                  </tr>

                 {
                    APIchangeSelectOption.map((item,key)=>(
                      <tr key={key}>
                    <th>{item.empty_cylinder_tocollect_id}</th>
                    <th>{item.date}</th>
                    <th>{item.quantity}</th>
                  </tr> 
                    
                      ))}
                  {/* <tr>
                    <th>{APIchangeSelectOption.}</th>
                    <th>12/10/1990</th>
                    <th>50</th>
                  </tr> */}
                  
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCylinder;
