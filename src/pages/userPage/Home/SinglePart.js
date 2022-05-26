import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SinglePart = ({ part }) => {
  return (
    <div className="card max-w-[350px] bg-base-100 shadow-xl border relative hover:scale-105 duration-200 ">
      <figure>
        <img
          src={part.image}
          alt="Shoes"
          className="w-[250px] h-[200px] mt-2"
        />
      </figure>
      <div className=" card-body">
        <h2 className="card-title">{part.name}</h2>
        <div className="flex items-center">
          <h2 className="text-md text-gray-500 ">
            Price:{" "}
            <span className="text-red-700 font-bold text-xl">{part.price}</span>{" "}
            / Piece
          </h2>
          <p className="text-right text-sm text-green-400 font-bold">
            In Stock
          </p>
        </div>
        <h2 className="text-sm text-gray-600">
          Available : {part.quantity}Pieces
        </h2>
        <h2 className="text-sm text-gray-600">Min. Order: {part.min}Pieces</h2>

        <p className="text-sm text-gray-500 mb-10">{part.text}.....</p>
      </div>
      <div className="w-full absolute bottom-0">
        <Link to={`/purchase/${part._id}`}>
          <button className="btn btn-primary  w-full rounded-tr-sm rounded-tl-sm">
            Order Now <FaShoppingCart className="ml-5 w-[30px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePart;
