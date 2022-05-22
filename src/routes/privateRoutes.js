import AddReview from "../pages/userPage/AddReview";
import MyOrder from "../pages/userPage/MyOrder";
import Purchase from "../pages/userPage/Purchase";
import MyProfile from "../pages/userPage/MyProfile";

export const privateRoutes = [
  { path: "/addreview", name: "AddReview", Component: AddReview },
  { path: "/myorder", name: "MyOrder", Component: MyOrder },
  { path: "/myprofile", name: "MyProfile", Component: MyProfile },
  { path: "/purchase", name: "Purchase", Component: Purchase },
];

export default privateRoutes;
