import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import ResetModal from "./ResetModal";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../authentication/firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
const Login = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password);

    reset();
  };

  if (user) {
    toast.success("Login Successfully !!");
    navigate(from, { replace: true });
  }

  useEffect(() => {
    if (error) {
      console.log(error.message);
      switch (error.message) {
        case "Firebase: Error (auth/email-already-exists).":
          toast.error("Email is Already using.");
          break;
        case "Firebase: Error (auth/user-not-found).":
          toast.error("Please enter a valid email ?");
          break;
        case "Firebase: Error (auth/wrong-password).":
          toast.error("Wrong Password !!");
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
        <div className="lg:max-w-md md:max-w-sm w-full bg-white bg-opacity-80 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body shadow-xl">
              <h2 className="text-center my-5 lg:text-3xl text-xl font-bold text-primary uppercase">
                Please Login
              </h2>
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
              <div className="form-control relative ">
                <label className="label ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={open ? "text" : "password"}
                  placeholder="Your Password"
                  className="input input-bordered "
                  {...register("password", {
                    required: { value: true, message: "Password is Required" },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Must minimum 8 characters, at least one letter and one number",
                    },
                  })}
                />

                {open ? (
                  <BiShowAlt
                    className=" text-2xl absolute top-[40%] right-2"
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <BiHide
                    className=" text-2xl absolute top-[40%] right-2"
                    onClick={() => setOpen(!open)}
                  />
                )}

                <label className="label flex justify-between items-center label-text-alt link link-hover">
                  <label htmlFor="my-modal-3">Forget Password ?</label>
                  <Link to={"/signup"}>
                    Create an Account ?
                    <span className="text-primary">SignUp</span>{" "}
                  </Link>
                </label>
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
              <div className="form-control mt-6">
                <button
                  className={
                    loading ? "btn btn-primary loading" : "btn-primary btn"
                  }
                  type="submit"
                >
                  Login
                </button>
              </div>
              <SocialLogin />
            </div>
          </form>
          <ResetModal />
        </div>
      </div>
    </div>
  );
};

export default Login;
