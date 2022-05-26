import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../authentication/firebase.init";
import SocialLogin from "./SocialLogin";
import { BiShowAlt, BiHide } from "react-icons/bi";
import fetcher from "../api/fetcher";
import useToken from "../api/useToken";

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

    const res = await fetcher.post("/add-user", { ...data, role: "user" });

    reset();
    setConfirmPas("");
  };
  const [token] = useToken(user);
  if (token) {
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
      return;
    }
  }, [error]);
  return (
    <div
      className="pt-12 "
      style={{
        backgroundImage: " url(https://i.ibb.co/3hLY1Df/pxfuel-com-8.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center h-screen p-5">
        <div className="max-w-md backdrop-blur-sm bg-white/30 w-full  border bg-opacity-80 rounded-xl ">
          <div className="card-body ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center mb-2 lg:text-3xl text-xl font-bold text-primary uppercase">
                Please SignUp
              </h2>

              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
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
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={open ? "text" : "password"}
                    placeholder="Your Password"
                    className="input input-bordered"
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
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
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>

              <button
                className={
                  loading
                    ? "btn btn-primary loading w-full"
                    : "btn-primary btn w-full"
                }
                type="submit"
              >
                SignUP
              </button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
