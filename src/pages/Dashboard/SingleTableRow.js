import React from "react";
import { Link } from "react-router-dom";

const SingleTableRow = ({ order, index, _id }) => {
  const { name, price } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        $<span className="text-red-800 font-bold">{price}</span> /Piece
      </td>
      <td>
        <Link to={`/purchase/${_id}`}>
          <button className="btn btn-success">Pay</button>{" "}
        </Link>
      </td>
    </tr>
  );
};

export default SingleTableRow;
