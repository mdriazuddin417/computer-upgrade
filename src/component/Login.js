import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className=" "
      style={{
        backgroundImage:
          " url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="lg:max-w-md md:max-w-sm w-full bg-white bg-opacity-60 rounded-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please valid email ??",
                    },
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-sm mt-2 ml-2">
                    Email is required
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500 text-sm mt-2 ml-2">
                    Not a valid Email address
                  </p>
                )}
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Password"
                  class="input input-bordered"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter and one number",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm mt-2 ml-2">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm mt-2 ml-2">
                    Minimum eight characters, at least one letter and one number
                  </p>
                )}
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
