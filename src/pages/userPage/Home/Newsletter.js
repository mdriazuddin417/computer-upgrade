import React from "react";

const Newsletter = () => {
  return (
    <div
      class="hero"
      style={{
        backgroundImage: `url('https://i.ibb.co/HFzmxC8/ITHelp.png')`,
      }}
    >
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-black">
        <div className="my-10 text-center p-16 ">
          <h2 className="header-font">Newsletter</h2>
          <div className="flex flex-col space-y-2 justify-center items-center mt-5">
            <input
              type="text"
              className="w-full focus:outline-none px-5 border border-purple-500 rounded-3xl py-2"
            />{" "}
            <button className="btn btn-sm btn-secondary rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
