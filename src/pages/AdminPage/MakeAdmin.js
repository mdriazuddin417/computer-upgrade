import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../component/Loading";
import SingleAdminPage from "./SingleAdminPage";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(
    "user",
    async () => await axios.get("https://computer-upgrated.herokuapp.com/users")
  );
  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.data.map((user, index) => (
              <SingleAdminPage
                key={user._id}
                id={user._id}
                refetch={refetch}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
