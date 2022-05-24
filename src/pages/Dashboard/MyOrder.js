import React, { useEffect, useState } from "react";
import useOrder from "../../hooks/useOrder";
import SingleTableRow from "./SingleTableRow";

const MyOrder = () => {
  const [orders, setOrders] = useOrder();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <SingleTableRow
                key={order._id}
                order={order}
                index={index}
                id={order._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
