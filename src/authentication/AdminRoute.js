import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../component/Loading";
import useAdmin from "../hooks/useAdmin";
import auth from "./firebase.init";

const AdminRoute = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    <Loading />;
  }

  if (!admin || !user) {
    return <Navigate to={"/"} replace></Navigate>;
  }
  return <Outlet />;
};
export default AdminRoute;
