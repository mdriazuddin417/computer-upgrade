import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../../api/fetcher";
import { toast } from "react-toastify";
import PurchaseOrder from "./PurchaseOrder";
const Purchase = ({ orderPrice, setOrderPrice }) => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  const { name, price, image, text, min, quantity } = part;
  const [orderQuantity, setOrderQuantity] = useState(0);

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

  const handleTotal = () => {
    if (orderQuantity > quantity) {
      setOrderPrice(0);
      return toast.error("Unavailable  quantity !");
    } else if (orderQuantity < 1) {
      setOrderPrice(0);
      return toast.error("Please Enter a valid quantity ??");
    } else if (min > orderQuantity) {
      setOrderPrice(0);
      return toast.error(` Please order minimum ${min} Piece`);
    } else if (orderQuantity && price) {
      const newPrice = orderQuantity * parseInt(price);
      setOrderPrice(newPrice);
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  ">
          <div className="max-w-5xl grid lg:grid-cols-2 gap-5 bg-base-100 shadow-xl card">
            <div className="card ">
              <figure>
                <img src={image} alt={name} className="w-[250] h-[250px]" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-400 text-sm">{text}</p>
                <div className="flex items-center">
                  <h2 className="text-md text-gray-500 ">
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
                <h2 className="text-md text-gray-600">
                  Available : {quantity}Pieces
                </h2>
                <h2 className="text-xs text-gray-600">
                  Min. Order: {min}Pieces
                </h2>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Enter Quantity</span>
                  </label>
                  <label className="input-group input-group-sm">
                    <button
                      disabled={orderQuantity > quantity - 1 ? true : false}
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
                      className="input input-bordered input-sm "
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
                <div>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleTotal}
                  >
                    Total
                  </button>
                </div>
                <p>
                  Total Amount: $
                  <span className="text-red-800 font-bold text-xl">
                    {orderPrice || 0}
                  </span>
                </p>
              </div>
            </div>
            <PurchaseOrder
              orderQuantity={orderQuantity}
              orderPrice={orderPrice}
              id={id}
              part={part}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
