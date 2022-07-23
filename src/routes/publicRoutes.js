import Login from "../component/Login";
import SignUp from "../component/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Blog from "../pages/userPage/Blog";
import AllParts from "../pages/userPage/Home/AllParts";
import Home from "../pages/userPage/Home/Home";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/parts", name: "ALLParts", Component: AllParts },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
];
