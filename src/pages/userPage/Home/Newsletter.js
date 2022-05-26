import React from "react";

const Newsletter = () => {
  return (
    <div className="my-10 text-center p-16 bg-gradient-to-r from-blue-400 to-blue-200">
      <h2 className="header-font">Newsletter</h2>
      <div className="flex flex-col space-y-2 justify-center items-center mt-5">
        <input
          type="text"
          className="w-80 focus:outline-none px-5 border border-purple-500 rounded-3xl py-2"
        />{" "}
        <button className="btn btn-secondary rounded-3xl">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
