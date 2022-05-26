import AddProduct from "../pages/AdminPage/AddProduct";
import MakeAdmin from "../pages/AdminPage/MakeAdmin";
import ManageAllOrder from "../pages/AdminPage/ManageAllOrder";
import ManageProduct from "../pages/AdminPage/ManageProduct";

export const adminRoutes = [
  { path: "addproduct", name: "AddProduct", Component: AddProduct },
  { path: "manageallorder", name: "ManageAllOrder", Component: ManageAllOrder },
  { path: "manageproduct", name: "ManageProduct", Component: ManageProduct },
  { path: "makeadmin", name: "MakeAdmin", Component: MakeAdmin },
];
