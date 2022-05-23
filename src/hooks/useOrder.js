import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";

const useOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/order");
      if (res) {
        setOrders(res.data);
      }
    })();
  }, []);
  return [orders, setOrders];
};

export default useOrder;
