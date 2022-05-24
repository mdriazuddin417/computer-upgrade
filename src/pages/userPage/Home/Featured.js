import React from "react";
import img1 from "../../../assets/image/catagori1.png";
import img2 from "../../../assets/image/cetagori2.png";
const Featured = () => {
  const parts = [
    { img: img1, name: "SSD" },
    { img: img2, name: "Processor" },
    { img: img1, name: "SSD" },
    { img: img2, name: "Processor" },
    { img: img1, name: "SSD" },
    { img: img2, name: "Processor" },
    { img: img1, name: "SSD" },
    { img: img2, name: "Processor" },
  ];
  return (
    <div className="my-10">
      <div className="text-center ">
        <h1>Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-2 mt-5">
        {parts.map((part) => (
          <div className="card  bg-white shadow-xl p-5 border">
            <div className="flex justify-center items-center">
              <img
                src={part.img}
                alt={part.name}
                className="rounded-xl w-[50px] "
              />
            </div>
            <div className="flex justify-center items-center text-center mt-3">
              <h2 className="card-title">{part.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
