import React, { useState } from "react";
import fetcher from "../api/fetcher";

const useAdmin = async (email) => {
  const [admin, setAdmin] = useState("");
  const res = await fetcher.get(`/admin/${email}`);
  if (res.data) {
    console.log(res.data);
  }
  return [admin];
};

export default useAdmin;
