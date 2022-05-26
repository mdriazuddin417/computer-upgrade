import React from "react";
import img1 from "../../../assets/image/sub4.jpg";
import img2 from "../../../assets/image/sub1.webp";
import img3 from "../../../assets/image/sub2.webp";
import img4 from "../../../assets/image/sub3.webp";

const SubBanner = () => {
  const parts = [
    {
      offer: "Mega Offer",
      name: "Graphics Card",
      subName: "Graphics card",
      img: img1,
    },
    {
      offer: "Mega Offer",
      name: "Gigabyte GA-H61M-DS2",
      subName: "MotherBoard",
      img: img2,
    },
    {
      offer: "Mega Offer",
      name: "Intel 10th Gen Core i3",
      subName: "Processor",
      img: img3,
    },
    {
      offer: "Mega Offer",
      name: "AMD Ryzen 5",
      subName: "Mother Board",
      img: img4,
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-3">
      {parts.map((part, index) => (
        <div
          key={index}
          className="card card-side bg-white duration-300 hover:shadow-lg border border-green-500 p-3"
        >
          <figure>
            <img
              src={part.img}
              alt="Movie"
              className="w-[70px] h-[70px] rounded"
            />
          </figure>
          <div className=" flex flex-col justify-center items-start ml-3">
            <p className="text-gray-500 text-xs">{part.offer}</p>
            <h2 className="text-green-500 text-sm font-bold">{part.name}</h2>
            <p className="text-purple-500 text-xs">{part.subName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubBanner;
