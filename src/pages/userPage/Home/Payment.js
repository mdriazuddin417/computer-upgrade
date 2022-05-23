import React from "react";

const Payment = ({ orderPrice }) => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content  ">
        <div class="max-w-5xl ">
          <div class="card  bg-white p-10">
            <h2 className="text-center text-xl font-bold text-accent lg:text-3xl">
              Welcome to Payment{" "}
            </h2>
            <div class="card-body ">Total Price: {orderPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
