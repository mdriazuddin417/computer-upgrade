import React, { useState } from "react";

import axiosPrivate from "../api/PrivateAxios";

const useAdmin = async (email) => {
  const [admin, setAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  const res = await axiosPrivate.get(`/admin/${email}`);
  if (res.data) {
    console.log(res.data);
    setAdmin(res.data.admin);
    setAdminLoading(false);
  }
  return [admin, adminLoading];
};

export default useAdmin;
