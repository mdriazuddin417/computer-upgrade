import React from "react";
import useParts from "../../../hooks/useParts";
import SinglePart from "./SinglePart";

const Parts = () => {
  const [parts] = useParts();

  return (
    <div className="my-10">
      <h2 className="text-center mb-5 header-font">Products</h2>
      <p className="text-center text-gray-500">
        Business can process orders &accept payments
      </p>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-7 ">
          {parts?.data.slice(0, 6).map((part) => (
            <SinglePart key={part._id} part={part} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parts;
