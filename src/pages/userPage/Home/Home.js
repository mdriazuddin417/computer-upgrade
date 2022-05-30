import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import Featured from "./Featured";
import Parts from "./Parts";
import SubBanner from "./SubBanner";
import Reviews from "./Reviews";
import Newsletter from "./Newsletter";
import Footer from "../../../component/Footer";
import SubBanner2 from "./SubBanner2";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
      <SubBanner2 />
      <Featured />
      <Parts />
      <Business />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
