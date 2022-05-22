import React from "react";

const SubBanner = () => {
  const parts = [
    { offer: "Mega Offer", name: "Graphics Card", subName: "Graphics card" },
    {
      offer: "Mega Offer",
      name: "Gigabyte GA-H61M-DS2",
      subName: "MotherBoard",
    },
    {
      offer: "Mega Offer",
      name: "Intel 10th Gen Core i3",
      subName: "Processor",
    },
    { offer: "Mega Offer", name: "AMD Ryzen 5", subName: "Mother Board" },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-3">
      {parts.map((part) => (
        <div class="card card-side bg-base-100 shadow-xl border p-3">
          <figure>
            <img
              src="https://api.lorem.space/image/movie"
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
