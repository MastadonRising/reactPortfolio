import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Footer from "../../components/footer";
import Carousel from "../../components/carousel";
import SideNavPage from "../../components/sideNav";

const Portfolio = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="2">
          <SideNavPage />
        </MDBCol>
        <MDBCol md="10">
          <Carousel />
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

export default Portfolio;
