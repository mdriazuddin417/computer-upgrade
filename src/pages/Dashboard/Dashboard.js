import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import auth from "../../authentication/firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);

  // const [admin] = useAdmin(user?.email);
  return (
    <div>
      <div className="drawer drawer-mobile pt-24">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-gray-100">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to={"myprofile"}>MY Profile</NavLink>
            </li>
            <li>
              <NavLink to={"myorder"}>My Order</NavLink>
            </li>
            <li>
              <NavLink to={"addreview"}>Add Review</NavLink>
            </li>
            <li>
              <NavLink to={"manageallorder"}>Manage All Order</NavLink>
            </li>
            <li>
              <NavLink to={"manageproduct"}>Manage Product</NavLink>
            </li>
            <li>
              <NavLink to={"addproduct"}>Add Product</NavLink>
            </li>
            <li>
              <NavLink to={"makeadmin"}>Make Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
