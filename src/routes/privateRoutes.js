import Payment from "../pages/userPage/Home/Payment";
import Purchase from "../pages/userPage/Purchase";

export const privateRoutes = [
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
  { path: "/payment/:id", name: "Payment", Component: Payment },
];

export default privateRoutes;
