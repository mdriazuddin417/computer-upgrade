import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();

    formData.append("image", image);
    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=0e53fbea7f6ba111a8e8e78349d06c7b",
        formData
      )
      .then((res) => {
        if (res?.data) {
          const img = res.data?.data?.display_url;
          const product = { ...data, image: img };

          fetcher.post("/part", product).then((res) => {
            setLoading(false);
            toast.success("Add product successfully !");
            reset();
          });
        }
      })
      .catch((error) => {
        console.log(error);
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
                Add Product
              </h2>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                  {...register("name", {
                    required: { value: true, message: "Name is Required" },
                  })}
                />
              </div>
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.name?.message}
                </span>
              )}

              <div className="form-control relative ">
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered "
                  {...register("price", {
                    required: { value: true, message: "price is Required" },
                  })}
                />
              </div>
              {errors.price?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.price?.message}
                </span>
              )}
              <div className="form-control relative ">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input input-bordered "
                  {...register("quantity", {
                    required: { value: true, message: "Quantity is Required" },
                  })}
                />
              </div>
              {errors.quantity?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.quantity?.message}
                </span>
              )}
              <div className="form-control relative ">
                <input
                  type="text"
                  placeholder="Minimum Order"
                  className="input input-bordered "
                  {...register("min", {
                    required: {
                      value: true,
                      message: "Minimum Order is Required",
                    },
                  })}
                />
              </div>
              {errors.min?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.min?.message}
                </span>
              )}
              <div className="form-control ">
                <label
                  className="label btn btn-accent flex justify-center items-center"
                  htmlFor="image"
                >
                  <span className="label-text text-center">Upload Photo</span>
                </label>
                <input
                  id="image"
                  type="file"
                  className="input input-bordered hidden"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "image is Required",
                    },
                  })}
                />
              </div>
              {errors.image?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.image?.message}
                </span>
              )}
              <div className="form-control relative ">
                <textarea
                  type="text"
                  placeholder="Short description"
                  className="textarea textarea-bordered "
                  {...register("description", {
                    required: {
                      value: true,
                      message: "description is Required",
                    },
                  })}
                />
              </div>
              {errors.description?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.description?.message}
                </span>
              )}

              <div className="form-control mt-6">
                <button
                  className={
                    loading ? "btn-primary btn loading" : "btn-primary btn"
                  }
                  type="submit"
                >
                  Add Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
