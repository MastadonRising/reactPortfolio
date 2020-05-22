import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

import Card from "../card";
import Projects from "../../assets/data.json";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="1"></MDBCol>
        <MDBCol md="8">
          <MDBCarousel
            activeItem={1}
            length={6}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            // multiItem
          >
            <MDBCarouselInner>
              <MDBRow>
                {Projects.map((project, index) => {
                  return (
                    <MDBCarouselItem itemId={project.id}>
                      <Card
                        image={project.image}
                        title={project.title}
                        tech={project.tech}
                        desc={project.desc}
                        repo={project.repo}
                        deployed={project.deployed}
                        id={project.id}
                      />
                    </MDBCarouselItem>
                  );
                })}
              </MDBRow>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Carousel;
