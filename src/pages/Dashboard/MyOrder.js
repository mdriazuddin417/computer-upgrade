import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";
import auth from "../../authentication/firebase.init";
import Loading from "../../component/Loading";
import useOrder from "../../hooks/useOrder";
import SingleTableRow from "./SingleTableRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const {
    data: orders,
    isLoading,
    refetch,
    error,
  } = useQuery(
    "Order",
    async () => await fetcher.get(`/order?email=${user.email}`)
  );
  if (isLoading) {
    <Loading />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <div>
      {!(orders === null || orders?.length === 0 || orders === undefined) ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.map((order, index) => (
                <SingleTableRow
                  key={order._id}
                  order={order}
                  index={index}
                  id={order._id}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div class="card  bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title font-bold text-4xl text-primary">
                Please Order Now{" "}
              </h2>

              <div class="card-actions justify-center">
                <Link to={"/home"}>
                  <button class="btn btn-primary">Visit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
