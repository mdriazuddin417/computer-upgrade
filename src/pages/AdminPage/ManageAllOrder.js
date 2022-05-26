import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import fetcher from "../../api/fetcher";

import Loading from "../../component/Loading";

import SingleOrder from "./SingleOrder";

const ManageAllOrder = () => {
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("order", async () => await fetcher.get("/admin-order"));

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>

              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Success Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order, index) => (
              <SingleOrder
                index={index}
                key={order._id}
                id={order._id}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
