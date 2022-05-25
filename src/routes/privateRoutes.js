import UpdateProduct from "../pages/AdminPage/UpdateProduct";
import OrderPagePayment from "../pages/userPage/Home/OrderPagePayment";
import Payment from "../pages/userPage/Home/Payment";

import Purchase from "../pages/userPage/Purchase";

export const privateRoutes = [
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
  { path: "/payment/:id", name: "Payment", Component: Payment },
  {
    path: "/orderpayment/:id",
    name: "OrderPagePayment",
    Component: OrderPagePayment,
  },

  { path: "/update-part/:id", name: "UpdateProduct", Component: UpdateProduct },
];

export default privateRoutes;
