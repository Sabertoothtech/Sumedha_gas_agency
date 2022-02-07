import React from 'react';

function stock({instockdata,showFilledcontainer}) {
  return <>
  <small
    style={{
      fontSize: "12px",
      color: "gray",
      marginBottom: "10px",
    }}
  >
    All cylinder in stock
  </small>
  <small style={{ marginBottom: "15px" }}>Domestic 15kg</small>
  <table style={{ textAlign: "center", borderCollapse: "collaps" }}>
    <thead >
      <td>Agency name</td>
      <td>Date</td>
      <td>Quantity</td>
    </thead>
    <tbody>

    {
        instockdata.map((item,key)=>(
        item.id === showFilledcontainer+1?
        <tr key={key}>
        <th>{item.agency_name}</th>
        <th>{item.date}</th>
        <th>{item.quantity}</th>
      </tr> :""
        
          ))}

</tbody>
   
  </table>
  
</>;
}

export default stock;
