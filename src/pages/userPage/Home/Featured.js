import React from "react";
import img1 from "../../../assets/image/catagori1.png";
import img2 from "../../../assets/image/cetagori2.png";
import img3 from "../../../assets/image/graphic-card.png";
import img4 from "../../../assets/image/keyboard.png";
import img5 from "../../../assets/image/mouse.png";
import img6 from "../../../assets/image/Printer.png";
import img7 from "../../../assets/image/ram-5945653__340.webp";
import img8 from "../../../assets/image/1639646329056_router-01-4004.png";
const Featured = () => {
  const parts = [
    { img: img1, name: "SSD" },
    { img: img2, name: "Processor" },
    { img: img3, name: "SSD" },
    { img: img4, name: "keyboard" },
    { img: img5, name: "Mouse" },
    { img: img6, name: "Printer" },
    { img: img7, name: "Ram" },
    { img: img8, name: "Router" },
  ];
  return (
    <div className="my-10">
      <div className="text-center ">
        <h1 className="header-font">Featured Category</h1>
        <p className="text-gray-500">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-2 mt-5">
        {parts.map((part, index) => (
          <div key={index} className="card  bg-white shadow-xl p-5 border">
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
