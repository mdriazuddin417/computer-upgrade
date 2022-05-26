import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import axiosPrivate from "../../api/PrivateAxios";
import auth from "../../authentication/firebase.init";
import Loading from "../../component/Loading";

import SingleTableRow from "./SingleTableRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
    error,
  } = useQuery(
    "Order",
    async () =>
      await axiosPrivate
        .get(
          `https://computer-upgrated.herokuapp.com/order?email=${user.email}`
        )
        .catch((error) => {
          if (error.response.status === 403) {
            signOut(auth);
            navigate("/login");
          }
        })
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
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold text-4xl text-primary">
                Please Order Now{" "}
              </h2>

              <div className="card-actions justify-center">
                <Link to={"/home"}>
                  <button className="btn btn-primary">Visit</button>
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
