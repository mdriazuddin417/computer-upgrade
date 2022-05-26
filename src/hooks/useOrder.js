import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";
import axiosPrivate from "../api/PrivateAxios";

const useOrder = (user) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axiosPrivate.get(
        `https://computer-upgrated.herokuapp.com/order?email=${user?.email}`
      );
      if (res) {
        setOrders(res.data);
      }
    })();
  }, [user]);
  return [orders, setOrders];
};

export default useOrder;
