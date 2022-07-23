import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import fetcher from "../../api/fetcher";
import Loading from "../../component/Loading";
import ConfirmModel from "./ConfirmModel";
import SingleManageProduct from "./SingleManageProduct";

const ManageProduct = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("allparts", async () => await fetcher.get("/all-parts"));
  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        {parts?.data.map((part) => (
          <SingleManageProduct
            refetch={refetch}
            key={part._id}
            id={part._id}
            part={part}
          ></SingleManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
