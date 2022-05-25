import React from "react";
import useParts from "../../../hooks/useParts";
import SinglePart from "./SinglePart";

const Parts = () => {
  const [parts, setparts] = useParts();

  return (
    <div className="my-10">
      <h2 className="text-center mb-5">Products</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {parts.slice(0, 6).map((part) => (
          <SinglePart key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
