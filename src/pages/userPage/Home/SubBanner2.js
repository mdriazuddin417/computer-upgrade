import React from "react";

const SubBanner2 = () => {
  return (
    <div className="my-10 ">
      <div class="hero  ">
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
              Dynamic random access memory (DRAM) is the majority in computers.
              Modern computers use several types of DRAM. Before 2002, most
              computers used single data rate (SDR) RAM. Most computers made
              since then use either double data rate (DDR), DDR2, DDR3, or DDR4
              RAM. The later types allow stored data to be moved and used more
              quickly, so that the computer's processor can keep working quickly
              without having to wait for data as long or as often.
            </p>
            <a
              target={"_blank"}
              href="https://simple.wikipedia.org/wiki/Dynamic_random_access_memory"
            >
              {" "}
              <button class="btn btn-primary">Visiting Other</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner2;
