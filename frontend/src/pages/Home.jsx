import React from "react";
import HomeHero from "../components/Home/HomeHero";
import SearchCard from "../components/Home/SearchCard";
import FeatureBar from "../components/Home/FeaturesBar";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import Step from "../components/Home/Step";
import SellBanner from "../components/Home/SellBanner";

const Home = () => {
  return (
    <>
      <HomeHero />
      <SearchCard />
      <div className="lg:mt-40 mt-85  px-4">
        <FeatureBar />
      </div>
      <div className="lg:mt-15 mt-10 px-4">
        <FeaturedProperties />
      </div>
      <div className="lg:mt-15 mt-10 px-4">
        <Step />
      </div>
      <div className="px-4">
        <SellBanner />
      </div>
    </>
  );
};

export default Home;
