import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";
import axiosPrivate from "../../api/PrivateAxios";
const SingleAdminPage = ({ user, index, refetch, id }) => {
  const [loading, setLoading] = useState(false);
  const [Rloading, setRLoading] = useState(false);
  const { email, name, role } = user;

  const handleMakeAdmin = async () => {
    setLoading(true);

    await axiosPrivate
      .patch(`https://computer-upgrated.herokuapp.com/user/admin/${email}`, {
        role: "admin",
      })
      .then((res) => {
        refetch();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  const handleRemoveAdmin = async () => {
    setRLoading(true);

    await axiosPrivate
      .patch(`https://computer-upgrated.herokuapp.com/user/admin/${email}`, {
        role: "user",
      })
      .then((res) => {
        setLoading(false);
        refetch();
        refetch();
        setRLoading(false);
      })
      .catch((error) => {
        setRLoading(false);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button
          disabled={role === "admin" ? true : false}
          className={
            loading
              ? "btn btn-xs loading  lg:btn-sm btn-success"
              : "btn btn-xs  lg:btn-sm btn-success"
          }
          onClick={handleMakeAdmin}
        >
          create
        </button>
      </td>
      <td>
        <button
          disabled={role === "user" ? true : false}
          className={
            Rloading
              ? "btn btn-xs loading  lg:btn-sm btn-error"
              : "btn btn-xs  lg:btn-sm btn-console.error();"
          }
          onClick={handleRemoveAdmin}
        >
          remove
        </button>
      </td>
    </tr>
  );
};

export default SingleAdminPage;
