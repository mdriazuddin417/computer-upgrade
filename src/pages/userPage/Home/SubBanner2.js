import React from "react";

const SubBanner2 = () => {
  return (
    <div className="my-10 ">
      <div class="hero  bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse gap-10 p-10">
          <img
            src="https://i.ibb.co/HFzmxC8/ITHelp.png"
            width={320}
            class="max-w-sm rounded-lg shadow-2xl "
            alt=""
          />
          <div className="">
            <h1 class="lg:text-4xl text-2xl font-bold">
              Full Computer part Selling my Company
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Visiting Other..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner2;
