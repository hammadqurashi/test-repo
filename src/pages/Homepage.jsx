import React from "react";
import TopBar from "../features/home-page/components/TopBar";
import BottomBar from "../features/home-page/components/BottomBar";
import MainSection from "../features/home-page/components/MainSection";

const Homepage = () => {
  return (
    <section className="container mx-auto p-5">
      <TopBar />
      <MainSection />
      <BottomBar />
    </section>
  );
};

export default Homepage;
