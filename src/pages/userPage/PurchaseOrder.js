import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import fetcher from "../../api/fetcher";
import axiosPrivate from "../../api/PrivateAxios";

import auth from "../../authentication/firebase.init";
import useUser from "../../hooks/useUser";
const PurchaseOrder = ({
  orderQuantity,

  orderPrice,
  id,
  part,
}) => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [users, setUsers] = useUser();
  const getUsers = users.find((getU) => getU.email === user.email);

  const order = {
    orderId: part._id,
    name: part.name,
    min: part.min,
    quantity: parseInt(orderQuantity),
    price: orderPrice,
    payment: "unpaid",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axiosPrivate.post("https://computer-upgrated.herokuapp.com/order", {
      ...order,
      email: user?.email,
    });

    navigate(`/payment/${id}`);
  };

  return (
    <div className="">
      <div className="card mt-10">
        <h3 className="text-4xl text-primary font-bold text-center mt-2">
          Order Form
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || getUsers?.name}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || getUsers?.email}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>

            <input
              className="btn btn-primary mt-5"
              type="submit"
              disabled={orderPrice ? false : true}
              value="Place Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PurchaseOrder;
