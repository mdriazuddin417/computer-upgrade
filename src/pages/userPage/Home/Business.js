import React from "react";
import { FaUsers } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { AiFillFlag, AiOutlineFundProjectionScreen } from "react-icons/ai";
import CountUp from "react-countup";
const Business = () => {
  return (
    <div className="my-10 ">
      <div className="mb-5">
        <h2 className="text-center header-font">Business Qualification</h2>
        <p className="text-center text-gray-500 ">
          Try to understand user expectation
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-5">
        <div className=" bg-white p-5  hover:shadow-lg hover:border rounded-xl duration-500 flex flex-col justify-center items-center ">
          <AiFillFlag className="text-7xl text-green-500" />
          <p className="text-4xl text-primary font-semibold my-2">
            <CountUp start={100} end={120} />+
          </p>
          <p className="text-xl font-bold text-gray-500">Countries</p>
        </div>
        <div className=" bg-white p-5 hover:shadow-lg hover:border rounded-xl duration-500  flex flex-col justify-center items-center">
          <AiOutlineFundProjectionScreen className="text-7xl text-green-500" />
          <p className="text-4xl text-primary font-semibold my-2">
            <CountUp start={450} end={500} />+
          </p>
          <p className="text-xl font-bold text-gray-500">Complete Project</p>
        </div>
        <div className=" bg-white p-5 hover:shadow-lg hover:border rounded-xl duration-500  flex flex-col justify-center items-center">
          <HiTrendingUp className="text-7xl text-green-500" />
          <p className="text-4xl text-primary font-semibold my-2">
            <CountUp start={9960} end={10000} />+
          </p>
          <p className="text-xl font-bold text-gray-500">Monthly Order</p>
        </div>
        <div className=" bg-white p-5 hover:shadow-lg hover:border rounded-xl duration-500  flex flex-col justify-center items-center ">
          <FaUsers className="text-7xl text-green-500" />
          <p className="text-4xl text-primary font-semibold my-2">
            <CountUp start={220} end={250} />+
          </p>
          <p className="text-xl font-bold text-gray-500">Client Feedbacks</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
