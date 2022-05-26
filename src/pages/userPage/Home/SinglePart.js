import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SinglePart = ({ part }) => {
  const { _id, name, image, price, min, text, quantity } = part;

  return (
    <div className="card bg-base-100 shadow-xl border relative ">
      <figure>
        <img src={image} alt="Shoes" className="w-3/5 mt-2" />
      </figure>
      <div className=" card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex items-center">
          <h2 className="text-md text-gray-500 ">
            Price:{" "}
            <span className="text-red-700 font-bold text-xl">{price}</span> /
            Piece
          </h2>
          <p className="text-right text-sm text-green-400 font-bold">
            In Stock
          </p>
        </div>
        <h2 className="text-sm text-gray-600">Available : {quantity}Pieces</h2>
        <h2 className="text-sm text-gray-600">Min. Order: {min}Pieces</h2>

        <p className="text-sm text-gray-500 mb-10">{text}.....</p>
      </div>
      <div className="w-full absolute bottom-0">
        <Link to={`/purchase/${_id}`}>
          <button className="btn btn-primary  w-full rounded-tr-sm rounded-tl-sm">
            Order Now <FaShoppingCart className="ml-5 w-[30px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePart;
