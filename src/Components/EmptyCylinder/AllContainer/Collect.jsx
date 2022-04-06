import React from "react";

function Collect({ incollectdata }) {
  // console.log("aaaaaaaaaaaaa", incollectdata);
  return (
    <div>
      <small
        style={{
          fontSize: "12px",
          color: "gray",
          marginBottom: "10px",
          display: "block",
        }}
      >
        All Requests
      </small>
      <small style={{ marginBottom: "15px" }}>Domestic 15kg</small>
      <table style={{ marginTop: "20px" }}>
        <thead>
          <th align="left">Agency Name</th>
          <th align="left">Date</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {/* {incollectdata.map((item, key) =>
            item.aa.map((ele) => (
              <tr key={key}>
                <td>{item.agency_name}</td>
                <td>{item.date}</td>
                <td align="center">{ele.quantity}</td>
              </tr>
            ))
          )} */}
          {/* {incollectdata.map((item) => (
            <h2>{item.date.agency_id}</h2>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Collect;
