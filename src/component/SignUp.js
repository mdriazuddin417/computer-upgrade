import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../authentication/firebase.init";
import SocialLogin from "./SocialLogin";
import { BiShowAlt, BiHide } from "react-icons/bi";
const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [confirmPas, setConfirmPas] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const onSubmit = async (data) => {
    const { email, password, confirmpassword } = data;

    if (password !== confirmpassword) {
      setConfirmPas("Password not match !");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    toast.success("Sign Up Successfully !");
    reset();
    setConfirmPas("");
  };
  if (user) {
    navigate("/");
  }
  useEffect(() => {
    if (error) {
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          toast.error("Email is Already using.");
          break;
        default:
          toast.error("Something Problem !!");
          break;
      }
    }
  }, [error]);
  return (
    <div
      className=" "
      style={{
        backgroundImage:
          " url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="lg:max-w-2xl md:max-w-sm w-full bg-white bg-opacity-80 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body shadow-xl">
              <h2 className="text-center mb-2 lg:text-3xl text-xl font-bold text-primary uppercase">
                Please SignUp
              </h2>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      class="input input-bordered"
                      {...register("email", {
                        required: { value: true, message: "Email is Required" },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a  valid email ??",
                        },
                      })}
                    />
                  </div>
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
                  <div class="form-control relative">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type={open ? "text" : "password"}
                      placeholder="Your Password"
                      class="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                          message:
                            "Must minimum 8 characters, at least one letter and one number",
                        },
                      })}
                    />
                    <div className=" text-2xl absolute top-[55%] right-2">
                      {open ? (
                        <BiShowAlt onClick={() => setOpen(!open)} />
                      ) : (
                        <BiHide onClick={() => setOpen(!open)} />
                      )}
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-sm mt-2 ml-2">
                      {errors?.password?.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500 text-sm mt-2 ml-2">
                      {errors?.password?.message}
                    </span>
                  )}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="input input-bordered"
                      {...register("confirmpassword", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                      })}
                    />
                  </div>
                  <span className="text-red-500 text-sm mt-2 ml-2">
                    {confirmPas}
                  </span>
                  {errors.confirmpassword?.type === "required" && (
                    <span className="text-red-500 text-sm mt-2 ml-2">
                      {errors?.confirmpasswords?.message}
                    </span>
                  )}
                </div>
                <div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="input input-bordered"
                      {...register("name", {
                        required: { value: true, message: "Name is Required" },
                      })}
                    />
                    {errors.name?.type === "required" && (
                      <span className="text-red-500 text-sm mt-2 ml-2">
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      class="input input-bordered"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is Required",
                        },
                      })}
                    />
                    {errors.address?.type === "required" && (
                      <span className="text-red-500 text-sm mt-2 ml-2">
                        {errors?.address?.message}
                      </span>
                    )}

                    <label class="label">
                      <Link to="/login" class="label-text-alt link link-hover">
                        Already have an account?
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-control mt-6 ">
                <button
                  class={
                    loading ? "btn btn-primary loading" : "btn-primary btn"
                  }
                  type="submit"
                >
                  SignUP
                </button>
              </div>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
