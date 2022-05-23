import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import fetcher from "../../../api/fetcher";
const SinglePart = ({ part }) => {
  const { _id, name, image, price, min, text, quantity } = part;

  const handleAddPart = async () => {
    const res = await fetcher.post("/order-parts", {
      name,
      image,
      price,
      min,

      text,
      quantity,
    });
    console.log(res.data);
  };

  return (
    <div class="card bg-base-100 shadow-xl border relative ">
      <figure>
        <img src={image} alt="Shoes" className="w-2/3" />
      </figure>
      <div class=" card-body">
        <h2 class="card-title">{name}</h2>
        <div className="flex items-center">
          <h2 class="text-md text-gray-500 ">
            Price:{" "}
            <span className="text-red-700 font-bold text-xl">{price}</span> /
            Piece
          </h2>
          <p className="text-right text-sm text-green-400 font-bold">
            In Stock
          </p>
        </div>
        <h2 class="text-sm text-gray-600">Available : {quantity}Pieces</h2>
        <h2 class="text-sm text-gray-600">Min. Order: {min}Pieces</h2>

        <p className="text-md text-gray-500 mb-10">{text}</p>
      </div>
      <div class="w-full absolute bottom-0">
        <Link to={`/purchase/${_id}`}>
          <button
            class="btn btn-primary w-full rounded-tr-sm rounded-tl-sm"
            onClick={handleAddPart}
          >
            Order Now <FaShoppingCart className="ml-5 w-[30px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePart;
