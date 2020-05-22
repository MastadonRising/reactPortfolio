import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Jumbotron from "../../components/jumbotron";
import Footer from "../../components/footer";
import SideNavPage from "../../components/sideNav";
import "./style.css";

const About = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2">
          <SideNavPage />
        </MDBCol>
        <MDBCol md="10">
          <Jumbotron />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <Footer />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
