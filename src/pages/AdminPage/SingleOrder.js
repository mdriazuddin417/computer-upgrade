import React from "react";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";

const SingleOrder = ({ order, index, id, refetch }) => {
  const { name, price, quantity, payment } = order;

  const handlePaymentSuccess = async () => {
    const res = await fetcher.patch(`/order/${id}`, { payment: "paid" });

    toast.success("success");
    refetch();
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        <span className="text-red-800 font-bold">{quantity}</span>
      </td>
      <td>
        $<span className="text-red-800 font-bold">{price}</span>
      </td>

      <td className="text-purple-500">{payment}</td>
      <td>
        {payment === "pending" && (
          <button
            className="btn btn-sm btn-success"
            onClick={handlePaymentSuccess}
          >
            success
          </button>
        )}
        {payment === "unpaid" && (
          <button className="btn btn-sm btn-error">Not Pay</button>
        )}
        {payment === "paid" && (
          <button className="btn btn-sm btn-disabled">success</button>
        )}
      </td>
    </tr>
  );
};

export default SingleOrder;
