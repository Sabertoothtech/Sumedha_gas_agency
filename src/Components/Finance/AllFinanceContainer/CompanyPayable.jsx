import React, { useState } from "react";

function CompanyPayable({
  setshowPdetail,
  PConpanyData,
  setPayableDetailsData,
}) {
  return (
    <>
      {PConpanyData.map((ele, key) => (
        <tr
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid gray",
            paddingRight: "20px",
            paddingLeft: "20px",
            paddingBottom: "8px",
            borderRadius: "5px",
          }}
          key={key}
          onClick={() => {
            setshowPdetail(true);
            setPayableDetailsData({
              id: ele.id,
              name: ele.vendor_name,
              amount: ele.amount,
              date: ele.date,
              transaction: ele.last_transactions,
              invoices: ele.invoices,
            });
          }}
        >
          {ele.amount === null ? (ele.amount = 0) : ""}

          <td align="left">
            <small>{ele.vendor_name}</small>
          </td>
          <td align="center">
            <small>{ele.date}</small>
          </td>
          <td align="left">
            <small>{ele.amount}</small>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CompanyPayable;
