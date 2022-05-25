import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";

const UpdateProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await fetcher
      .patch(`/part/${id}`, {
        name: data.name,
        quantity: data.quantity,
        text: data.text,
        min: data.min,
      })
      .then((res) => {
        setLoading(false);
        toast.success("Update  successfully !");
        reset();
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          " url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="lg:max-w-md md:max-w-sm w-full backdrop-blur-sm bg-white/30 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body shadow-xl">
              <h2 className="text-center my-5 lg:text-3xl text-xl font-bold text-primary uppercase">
                Update Product
              </h2>

              <div className="form-control relative ">
                <input
                  {...register("price")}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered "
                />
              </div>

              <div className="form-control relative ">
                <input
                  {...register("quantity")}
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered "
                />
              </div>

              <div className="form-control relative ">
                <input
                  {...register("min")}
                  type="text"
                  placeholder="Minimum Order"
                  className="input input-bordered "
                />
              </div>

              <div className="form-control relative ">
                <textarea
                  {...register("text")}
                  type="text"
                  placeholder="Short description"
                  className="textarea textarea-bordered "
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className={
                    loading ? "btn-primary btn loading" : "btn-primary btn"
                  }
                  type="submit"
                >
                  Update Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
