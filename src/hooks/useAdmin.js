import React, { useEffect, useState } from "react";

import axiosPrivate from "../api/PrivateAxios";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      axiosPrivate
        .get(`https://computer-upgrated.herokuapp.com/admin/${email}`)
        .then((res) => {
          if (res?.data) {
            setAdmin(res?.data.admin);
            setAdminLoading(false);
          }
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
