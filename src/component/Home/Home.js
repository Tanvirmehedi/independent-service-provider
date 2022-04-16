import React from "react";
import Banner from "../Banner/Banner";
import Questions from "../Questions/Questions";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Questions />
      <Services />
    </div>
  );
};

export default Home;
