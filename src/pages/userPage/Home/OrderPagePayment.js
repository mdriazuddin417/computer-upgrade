import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";

import axiosPrivate from "../../../api/PrivateAxios";

import auth from "../../../authentication/firebase.init";
import CheckoutForm from "./CheckoutForm";

const OrderPagePayment = () => {
  const { id } = useParams();

  const { data: order } = useQuery(
    ["order", id],
    async () =>
      await axiosPrivate.get(
        `https://computer-upgrated.herokuapp.com/order/${id}`
      )
  );

  const [user] = useAuthState(auth);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  ">
        <div className="max-w-5xl ">
          <div className="card  bg-white p-10">
            <div>
              <h2 className="text-center text-xl font-bold text-accent lg:text-3xl">
                Welcome to Payment{" "}
              </h2>
              <h2 className="text-xl font-bold my-2">
                Hello{" "}
                <span className="text-xl text-primary">
                  {user?.displayName}
                </span>
              </h2>
              <h2 className="text-xl font-bold my-2">
                Your Email:
                <span className="text-xl text-primary"> {user?.email}</span>
              </h2>
              <h2 className="text-xl font-bold my-2">
                Total Price : $
                <span className="text-xl text-primary">
                  {" "}
                  {order?.data.price}
                </span>
              </h2>
            </div>
            <div className="card  bg-base-100 shadow-2xl mt-10">
              <div className="card-body">
                {order?.data.price && (
                  <CheckoutForm price={order?.data.price} user={user} id={id} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPagePayment;
