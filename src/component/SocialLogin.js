import React, { useEffect } from "react";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../authentication/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
import axios from "axios";
import useToken from "../api/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, ghUser, ghLoading, ghError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const singleUser = {
    name: gUser?.user?.displayName || ghUser?.user?.displayName,
    email: gUser?.user?.email || ghUser?.user?.email,
    role: "user",
  };
  const userPost = async () => {
    const res = await axios.post(
      "https://computer-upgrated.herokuapp.com/add-user",
      {
        ...singleUser,
      }
    );
  };
  const [token] = useToken(gUser || ghUser);
  if (token) {
    navigate(from, { replace: true });
    userPost();
  }

  if (gError || ghError) {
    toast.error("Internal Something Error ");
  }
  return (
    <div className="grid grid-cols-1 gap-2 p-4 mt-0">
      <div class="divider">OR</div>
      <div className="flex justify-around items-center">
        <button
          class="btn btn-outline btn-error"
          onClick={() => signInWithGoogle()}
        >
          <FaGooglePlusG className="text-2xl mr-3" /> Google
        </button>
        <button class="btn btn-outline" onClick={() => signInWithGithub()}>
          <FaGithub className="text-2xl mr-3" /> GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
