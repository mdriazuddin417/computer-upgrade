import React from "react";

const PurchaseOrder = () => {
  return (
    <div>
      <div class="card ">
        <h3 className="text-4xl text-primary font-bold text-center mt-2">
          Order Form
        </h3>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
