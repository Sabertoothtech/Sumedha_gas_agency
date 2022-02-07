import React from 'react';

function Collect({incollectdata,showFilledcontainer}) {
  return <>
  <small
    style={{
      fontSize: "12px",
      color: "gray",
      marginBottom: "10px",
    }}
  >
    All requests
  </small>
  <small style={{ marginBottom: "15px" }}>Domestic 15kg</small>
  <table style={{ textAlign: "center", borderCollapse: "collaps" }}>
    <thead >
      <td>Agency name</td>
      <td>Quantity</td>
      <td>Date</td>
    </thead>
    <tbody>

    {
        incollectdata.map((item,key)=>(
        // item.id === showFilledcontainer+1?
    //     <tr key={key}>
    //     <th>{item.agency_name}</th>
    //     <th>{item.quantity}</th>
    //     <th>{item.date}</th>
    //   </tr>
    // :""
    <small>hi</small>
        
          ))}

</tbody>
   
  </table>
  
</>;
}

export default Collect;
