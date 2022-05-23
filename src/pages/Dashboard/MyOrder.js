import React, { useEffect, useState } from "react";
import useOrder from "../../hooks/useOrder";
import SingleTableRow from "./SingleTableRow";

const MyOrder = () => {
  const [orders, setOrders] = useOrder();

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
                _id={order._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
