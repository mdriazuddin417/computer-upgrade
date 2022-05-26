import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import auth from "../../authentication/firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);

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
              <NavLink to={"/dashboard/myprofile"}>MY Profile</NavLink>
            </li>
            {admin || (
              <>
                <li>
                  <NavLink to={"/dashboard/myorder"}>My Order</NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addreview"}>Add Review</NavLink>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <NavLink to={"/dashboard/manageallorder"}>
                    Manage All Order
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageproduct"}>
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addproduct"}>Add Product</NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/makeadmin"}>Make Admin</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
