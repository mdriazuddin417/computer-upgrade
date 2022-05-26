import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../authentication/firebase.init";
import fetcher from "../../api/fetcher";
import ReactStars from "react-rating-stars-component";
const AddReview = () => {
  const [user] = useAuthState(auth);
  const [ratingValue, setRatingValue] = useState(0);
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!ratingValue) {
      return toast.error("Please rating now");
    }
    const review = {
      name: user?.displayName,
      text: e.target.review.value,
      image: user?.photoURL || "https://i.ibb.co/MPvK3Cf/user.png",
      rating: ratingValue,
    };

    const res = await fetcher.post("/add-review", { ...review });
    if (res.data) {
      toast.success("Successfully!!");
      e.target.reset();
    }
  };
  const ratingChanged = (newRating) => {
    setRatingValue(newRating);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: " url(https://i.ibb.co/ynjdRLr/pxfuel-com-7.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-screen flex justify-center items-center"
      >
        <div className=" card  bg-base-100 opacity-90 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title font-bold lg:text-3xl text-xl text-primary">
              Add your feedback
            </h2>

            <form onSubmit={handleAddReview}>
              <textarea
                type="text"
                placeholder="feedback"
                name="review"
                required
                className="textarea textarea-bordered w-full max-w-xs mt-5"
              />
              <div className="flex justify-center items-center">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={45}
                  activeColor="#ffd700"
                />
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-success ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
