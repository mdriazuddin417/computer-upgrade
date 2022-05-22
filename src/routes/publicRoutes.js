import Dashboard from "../pages/Dashboard/Dashboard";
import Blog from "../pages/userPage/Blog";
import Home from "../pages/userPage/Home/Home";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/blog", name: "Blog", Component: Blog },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
];