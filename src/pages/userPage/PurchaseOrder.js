import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import fetcher from "../../api/fetcher";
import auth from "../../authentication/firebase.init";
import useUser from "../../hooks/useUser";
const PurchaseOrder = ({ orderPrice, id }) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);
  const [users, setUsers] = useUser();
  const getUsers = users.find((getU) => getU.email === user.email);

  const onSubmit = async (data) => {
    navigate("/payment");
  };

  return (
    <div>
      <div class="card ">
        <h3 className="text-4xl text-primary font-bold text-center mt-2">
          Order Form
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || getUsers?.name}
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || getUsers?.email}
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="address"
                class="input input-bordered"
                value={getUsers?.address || ""}
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={getUsers?.phone || ""}
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <Link to={orderPrice ? `/payment/${id}` : `/purchase/${id}`}>
                <button
                  disabled={orderPrice ? false : true}
                  class="btn btn-primary"
                  type="submit"
                >
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PurchaseOrder;
