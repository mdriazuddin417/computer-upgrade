import React from "react";
import useParts from "../../../hooks/useParts";
import SinglePart from "./SinglePart";

const AllParts = () => {
  const [parts] = useParts();
  return (
    <div className="lg:py-20 p-10 lg:px-10">
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-7 ">
          {parts?.data.map((part) => (
            <SinglePart key={part._id} part={part} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllParts;
