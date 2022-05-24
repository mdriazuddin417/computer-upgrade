import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-green-300">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
