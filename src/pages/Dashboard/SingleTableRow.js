import React from "react";
import { Link } from "react-router-dom";

const SingleTableRow = ({ order, index, _id }) => {
  const { name, price, paid } = order;
  console.log(order);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        $<span className="text-red-800 font-bold">{price}</span> /Piece
      </td>
      <td>
        {price && !paid && (
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-success">Pay</button>{" "}
          </Link>
        )}
        {price && paid && <span className="text-green-500">pending...</span>}
      </td>
    </tr>
  );
};

export default SingleTableRow;
