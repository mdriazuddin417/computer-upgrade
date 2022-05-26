import React, { useEffect, useState } from "react";
import fetcher from "./fetcher";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.email || user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      (async () =>
        await fetcher.put(`/user/${email}`, currentUser).then((res) => {
          const accessToken = res?.data?.token;

          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        }))();
    }
  }, [user]);
  return [token];
};

export default useToken;
