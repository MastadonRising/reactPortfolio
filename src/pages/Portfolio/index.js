import React from "react";

import Footer from "../../components/footer";
import Carousel from "../../components/carousel";
const Portfolio = () => {
  return (
    <div>
      <div className="wrapper">
        <Carousel />
      </div>
      <div className="push"></div>
      <Footer />
    </div>
  );
};

export default Portfolio;
