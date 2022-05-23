import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../../api/fetcher";
import { toast } from "react-toastify";
const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  const { name, price, image, text, min, quantity } = part;
  const [orderQuantity, setOrderQuantity] = useState(1);

  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get(`/part/${id}`);
      if (res.data) {
        setPart(res.data);
      } else {
        return;
      }
    })();
  }, [id]);

  useEffect(() => {
    // if (price && orderQuantity) {
    //   const newPrice = orderQuantity * parseInt(price);
    //   setOrderPrice(newPrice);
    // } else {
    //   alert("please enter a value quantity");
    //   return;
    // }
    if (orderQuantity > quantity) {
      toast.error("Your Order is Unavailable !!");
      return;
    } else if (orderQuantity < 1) {
      toast.error("Please Enter a valid quantity ??");
      return;
    } else if (min > orderQuantity) {
      toast.error(` Please order minimum ${min} Piece`);
    } else {
      const newPrice = orderQuantity * parseInt(price);
      setOrderPrice(newPrice);
    }
  }, [price, orderQuantity, min, quantity]);

  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content  ">
          <div class="max-w-5xl grid lg:grid-cols-2 gap-5 bg-base-100 shadow-xl card">
            <div class="card ">
              <figure>
                <img src={image} alt={name} className="w-[250] h-[250px]" />
              </figure>
              <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <div className="flex items-center">
                  <h2 class="text-md text-gray-500 ">
                    Price: $
                    <span className="text-red-700 font-bold text-xl">
                      {price}
                    </span>{" "}
                    / Piece
                  </h2>
                  <p className="text-right text-sm text-green-400 font-bold">
                    In Stock
                  </p>
                </div>
                <h2 class="text-md text-gray-600">
                  Available : {quantity}Pieces
                </h2>
                <h2 class="text-xs text-gray-600">Min. Order: {min}Pieces</h2>

                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Enter Quantity</span>
                  </label>
                  <label class="input-group input-group-sm">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        setOrderQuantity(parseInt(orderQuantity) + 1)
                      }
                    >
                      +
                    </button>
                    <input
                      type="number"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(e.target.value)}
                      class="input input-bordered input-sm "
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={orderQuantity < 2 ? true : false}
                      onClick={() =>
                        setOrderQuantity(parseInt(orderQuantity) - 1)
                      }
                    >
                      -
                    </button>
                  </label>
                </div>
                <p>
                  Total Amount: ${" "}
                  <span className="text-red-800 font-bold text-xl">
                    {orderPrice}
                  </span>
                </p>
                <p className="text-gray-400 text-sm">{text}</p>
              </div>
            </div>
            <div class="card ">
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
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
