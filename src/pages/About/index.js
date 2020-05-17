import React from "react";
import Jumbotron from "../../components/jumbotron";
import Footer from "../../components/footer";
import "./style.css";

const About = () => {
  return (
    <div>
      <div className="wrapper">
        <Jumbotron />
      </div>
      <div className="push"></div>
      <Footer />
    </div>
  );
};

export default About;
