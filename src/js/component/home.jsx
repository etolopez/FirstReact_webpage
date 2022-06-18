import React from "react";
import Jumbotron from "./Jumbotron.js";
import CardsContainer from "./CardsContainer.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Home = () => {
  return (
    <div className="container-fluid m-auto">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <CardsContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
