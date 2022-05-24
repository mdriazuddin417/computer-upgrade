import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";

const useOrder = (user) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get(`/order?email=${user?.email}`);
      if (res) {
        setOrders(res.data);
      }
    })();
  }, [user]);
  return [orders, setOrders];
};

export default useOrder;
