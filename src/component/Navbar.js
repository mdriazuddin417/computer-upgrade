import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../authentication/firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-white  fixed top-0 py-4 shadow-lg z-50">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-primary header font-bold text-3xl">
            Computer Upgrade
          </div>
          {pathname.includes("dashboard") && (
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          )}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal space-x-2">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to={"/home"} className="rounded">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/myprofile"} className="rounded">
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to={"/blog"} className="rounded">
                  Blog
                </NavLink>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={() => signOut(auth)}
                    className="btn btn-outline-primary rounded-lg text-white "
                  >
                    SignOut
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink to={"/login"} className="rounded">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"home"} className="rounded">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"} className="rounded">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myprofile"} className="rounded">
              Dashboard
            </NavLink>
          </li>
          {user ? (
            <li>
              <button className="btn btn-outline-primary rounded-lg text-white ">
                SignOut
              </button>
            </li>
          ) : (
            <li>
              <NavLink to={"/login"} className="rounded">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
