import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";

import { publicRoutes } from "./routes/publicRoutes";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";
import privateRoutes from "./routes/privateRoutes";
import AddProduct from "../src/pages/AdminPage/AddProduct";

import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrder from "./pages/Dashboard/MyOrder";
import AddReview from "./pages/Dashboard/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";

export const MyContext = createContext("price");

function App() {
  const [orderPrice, setOrderPrice] = useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <Component
                    orderPrice={orderPrice}
                    setOrderPrice={setOrderPrice}
                  />
                }
              />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="addreview" element={<AddReview />} />
          </Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
