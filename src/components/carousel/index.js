import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

import Card from "../card";
import Projects from "../../assets/data.json";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
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
                />
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
