import React from "react";
import Header from "../Components/Header";
import Manage from "../Components/Manage";
import Analysis from "../Components/UserAnalysis";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Manage />
      <Analysis />
    </div>
  );
};

export default Home;
