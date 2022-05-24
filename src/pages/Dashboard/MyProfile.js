import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../authentication/firebase.init";
import useOrder from "../../hooks/useOrder";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [orders] = useOrder(user);
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content  ">
        <div class="max-w-lg card bg-base-100 shadow-xl">
          <div class="card-body flex justify-center items-center">
            <div class="avatar mb-5 ">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photoURL || "https://i.ibb.co/MPvK3Cf/user.png"}
                  alt={user?.displayName}
                />
              </div>
            </div>
            <h1 class="mb-2 text-3xl font-bold card-title text-primary">
              {user?.displayName}
            </h1>
            <p class=" text-primary text-2xl font-semibold">{user?.email}</p>
            <h1 class="mb-5 text-xl font-bold c text-gray-600">
              My Orders: {orders?.length} Piece
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
