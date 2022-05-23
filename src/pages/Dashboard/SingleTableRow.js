import React from "react";

const SingleTableRow = ({ order, index }) => {
  const { name, price } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>Blue</td>
    </tr>
  );
};

export default SingleTableRow;
