import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";

const SingleTableRow = ({ order, index, id, refetch }) => {
  const [loading, setLoading] = useState(false);
  const { name, price } = order;
  const navigate = useNavigate();

  const handleDeleteOrder = async () => {
    setLoading(true);
    const res = await fetcher.delete(`/order/${id}`);
    if (res.data) {
      toast.success("Ordered Deleted !");
      refetch();
      setLoading(false);
    }
  };
  const handlePay = () => {
    navigate(`/orderpayment/${id}`);
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
          <button className="btn btn-success" onClick={handlePay}>
            Pay
          </button>
        )}
        {order.payment === "pending" && (
          <span className="text-purple-500">pending...</span>
        )}
        {order.payment === "paid" && (
          <span className="text-green-500">paid</span>
        )}
      </td>
      <td>
        <button
          disabled={
            order.payment === "pending" || order.payment === "paid"
              ? true
              : false
          }
          className={
            loading ? "btn btn-error btn-sm loading" : "btn btn-error btn-sm"
          }
          onClick={handleDeleteOrder}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleTableRow;
