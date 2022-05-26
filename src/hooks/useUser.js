import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";

const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/users");
      setUsers(res.data);
    })();
  }, []);
  return [users, setUsers];
};

export default useUser;
