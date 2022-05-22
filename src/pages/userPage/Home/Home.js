import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import Featured from "./Featured";
import Parts from "./Parts";
import SubBanner from "./SubBanner";
import Reviews from "./Reviews";
import Newsletter from "./Newsletter";
import Footer from "../../../component/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <SubBanner />
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
