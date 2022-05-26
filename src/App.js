import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";

import { publicRoutes } from "./routes/publicRoutes";
import PrivateRoute from "./authentication/PrivateRoute";
// import AdminRoute from "./authentication/AdminRoute";
import privateRoutes from "./routes/privateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrder from "./pages/Dashboard/MyOrder";
import AddReview from "./pages/Dashboard/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ManageAllOrder from "./pages/AdminPage/ManageAllOrder";
import ManageProduct from "./pages/AdminPage/ManageProduct";
import AddProduct from "./pages/AdminPage/AddProduct";
import MakeAdmin from "./pages/AdminPage/MakeAdmin";
import { adminRoutes } from "./routes/adminRoutes";
import NotFound from "./pages/NotFound";

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
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="myorder" element={<MyOrder />} />
              <Route path="addreview" element={<AddReview />} />
              <Route element={<PrivateRoute />}>
                {adminRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
              </Route>
              <Route />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
