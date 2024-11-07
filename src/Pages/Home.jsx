import React from "react";
import Nav from "../Components/Nav";
import Contactinfo from "../Components/Contactinfo";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />

      <Contactinfo variant="home" />
      <Footer />
    </div>
  );
};

export default Home;
