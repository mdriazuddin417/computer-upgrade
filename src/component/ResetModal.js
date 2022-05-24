import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../authentication/firebase.init";
const ResetModal = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast.success("Sent email");

    reset();
    navigate("/");
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Please Enter Your Valid Email !</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a  valid email ??",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm mt-2 ml-2">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="text-center mt-2">
              <button
                type="submit"
                className={
                  sending
                    ? "btn btn-primary loading btn-sm"
                    : "btn-primary btn btn-sm"
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
