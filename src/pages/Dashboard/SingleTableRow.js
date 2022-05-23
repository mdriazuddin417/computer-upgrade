import React from "react";

const SingleTableRow = ({ order, index }) => {
  const { name, price } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {" "}
        <button className="btn btn-success">Pay</button>{" "}
      </td>
    </tr>
  );
};

export default SingleTableRow;
