import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";

const SingleTableRow = ({ order, index, id, refetch }) => {
  const { name, price, paid } = order;

  const handleDeleteOrder = async () => {
    const res = await fetcher.delete(`/order/${id}`);
    if (res.data) {
      console.log(res.data);
      toast.success("Ordered Deleted !");
      refetch();
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        $<span className="text-red-800 font-bold">{price}</span>
      </td>
      <td>
        {order.payment === "unpaid" && (
          <Link to={`/payment/${id}`}>
            <button className="btn btn-success">Pay</button>{" "}
          </Link>
        )}
        {order.payment === "pending" && (
          <span className="text-green-500">pending...</span>
        )}
      </td>
      <td>
        <button
          disabled={order.payment === "pending" ? true : false}
          className="btn btn-error btn-sm"
          onClick={handleDeleteOrder}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleTableRow;
