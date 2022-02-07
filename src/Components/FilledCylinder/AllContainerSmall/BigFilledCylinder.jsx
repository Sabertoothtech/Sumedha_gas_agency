import React, { useState, useEffect } from "react";
import "./BigFilledCylinder.css";

function Big4Container(props) {
  const [divColor, setDivColor] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        title: "Domestic 15kg",
        color: "	#00BFFF",
      },
      {
        id: 2,
        title: "Commercial 21kg",
        color: "#FA8072",
      },
      {
        id: 3,
        title: "Commercial/VOT/LOT 33kg",
        color: "#FA8072",
      },
      {
        id: 4,
        title: "Commercial/LOT 45kg",
        color: "#FFD700",
      },
    ],
  });

  const p_c_s = {
    width: "95%",
    height: "100px",
    boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "8px",
    transition: "backgroundColor 0.1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "small",
  };

  useEffect(() => {
    setDivColor({ ...divColor, activeObject: divColor.objects[0] });
  }, []);

  // useEffect(() => {
  //     const config = {
  //         url: getTypeofCylinderAPI,
  //         method: 'GET',
  //         headers: {
  //             'Authorization': `Token ${sessionStorage.getItem('token')}`,
  //         },
  //     }
  //     await axios(config)
  //         .then((res) => {
  //             console.log(res.data)
  //         }).catch((err) => alert("Something is wrong...Your Email should be unique"))

  // }, [])

  const togalActive = (index) => {
    setDivColor({ ...divColor, activeObject: divColor.objects[index] });
    props.setShowFilledcontainer(index);
  };

  const togalActiveStyle = (index) => {
    if (divColor.objects[index] === divColor.activeObject) {
      // return "Big4_filled_container_box afteractive"
      return divColor.objects[index].color;
    } else {
      return "";
    }
  };
  return (
    <div className="big_filled_cylinder__main">
      {divColor.objects.map((element, index) => (
        <div key={index}>
          <div
            key={index}
            style={{
              width: "95%",
              height: "100px",
              boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "8px",
              transition: "backgroundColor 0.1s ease-in-out",
              display: "flex",
              justifyContent: "center",
              margin: "3px",
              alignItems: "center",
              fontSize: "small",
              backgroundColor: togalActiveStyle(index),
            }}
            onClick={() => {
              togalActive(index);
              props.setgasID(element.id);
              props.setgasName(element.title);
            }}
          >
            {element.title}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Big4Container;
