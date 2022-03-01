import React, { useState, useEffect } from "react";
import "./Big4ContainerEmpty.css";

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

  useEffect(() => {
    setDivColor({ ...divColor, activeObject: divColor.objects[0] });
  }, []);

  const togalActive = (index) => {
    setDivColor({ ...divColor, activeObject: divColor.objects[index] });
    props.setShowFilledcontainer(index);
  };

  const togalActiveStyle = (index) => {
    if (divColor.objects[index] === divColor.activeObject) {
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
              width: "98%",
              height: "110px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "15px",
              transition: "background-color 0.1s ease-in-out",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "small",
              margin: "3px",
              backgroundColor: togalActiveStyle(index),
            }}
            onClick={() => togalActive(index)}
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
