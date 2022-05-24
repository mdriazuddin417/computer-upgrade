import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../../api/fetcher";
import auth from "../../../authentication/firebase.init";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../../component/Loading";
const stripePromise = loadStripe(
  "pk_test_51L1CCDGNqDr1x0jXcYpwSFklaIzKeC9Pb0pOtHrkrrz8YpJ7GBWF0HxHpkG4XTLa03KLuTSe9dyrFu2sBzc6bpzl00RrPYFQYv"
);
const Payment = () => {
  const { id } = useParams();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["Order", id], async () => await fetcher.get(`/order/${id}`));
  if (isLoading) {
    <Loading />;
  }
  if (error) {
    console.log(error);
  }

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
                  {order?.data?.price}
                </span>
              </h2>
            </div>
            <div className="card  bg-base-100 shadow-2xl mt-10">
              <div className="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    price={order?.data?.price}
                    user={user}
                    id={id}
                  />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
