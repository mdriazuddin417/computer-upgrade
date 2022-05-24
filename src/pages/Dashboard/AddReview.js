import { async } from "@firebase/util";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../authentication/firebase.init";
import fetcher from "../../api/fetcher";
const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleAddReview = async (e) => {
    e.preventDefault();

    const review = {
      name: user?.displayName,
      text: e.target.review.value,
      image: user?.photoURL || "https://i.ibb.co/MPvK3Cf/user.png",
    };

    const res = await fetcher.post("/add-review", { ...review });
    if (res.data) {
      toast.success("Successfully!!");
      e.target.reset();
    }
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body ">
            <h2 class="card-title font-bold lg:text-3xl text-xl text-primary">
              Add your feedback
            </h2>
            <form onSubmit={handleAddReview}>
              <textarea
                type="text"
                placeholder="feedback"
                name="review"
                class="textarea textarea-bordered w-full max-w-xs mt-5"
              />
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
