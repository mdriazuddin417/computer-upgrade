import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";
import ConfirmModel from "./ConfirmModel";

const SingleManageProduct = ({ part, refetch, id }) => {
  const { name, price, min, quantity, image, text } = part;

  const handleDeleteProduct = async () => {
    const res = await fetcher.delete(`/part/${id}`);
    if (res.data) {
      toast.success("Ordered Deleted !");
      refetch();
    }
  };
  return (
    <div className="border p-3 ">
      <div className="flex justify-center items-center flex-col">
        <img src={image} alt="" className="rounded w-[150px] h-[150px]" />
        <div>
          <h2 className="text-xl font-bold text-blue-900 mt-2">{name}</h2>
          <p className="">
            Price:{" "}
            <span className="text-lg font-bold text-red-900">${price}</span>
            /piece
          </p>
          <p className="">
            Min.Order:{" "}
            <span className="text-lg font-bold text-red-900">{min}</span>piece
          </p>
          <p className="">
            Available:{" "}
            <span className="text-lg font-bold text-red-900">{quantity}</span>{" "}
            piece
          </p>
          <div className="flex justify-between items-center mt-4">
            <Link to={`/update-part/${id}`}>
              <button className="btn btn-xs btn-access">Update</button>
            </Link>

            <label for="my-modal" class="btn btn-error modal-button btn-xs">
              Delete
            </label>
          </div>
        </div>
      </div>
      <ConfirmModel handleDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default SingleManageProduct;
