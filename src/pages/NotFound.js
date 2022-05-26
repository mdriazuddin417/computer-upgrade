import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/image/not.webp";
const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  };
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: " url(https://i.ibb.co/6ZTB07t/not2.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <div>
            <h1 class="text-9xl font-bold text-red-500">404</h1>

            <p class="py-6 text-2xl">Page Not Found</p>
            <button class="btn btn-primary" onClick={handleNavigate}>
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
