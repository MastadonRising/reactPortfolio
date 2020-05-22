import React from "react";
import { Link } from "react-router-dom";
import { MDBSideNav } from "mdbreact";
import "./style.css";

const SideNavList = () => {
  return (
    <MDBSideNav breakWidth={700}>
      <li>
        <ul>
          <li>
            <Link
              color="white"
              className="fas fa-home fa-2x side "
              to="/"
              role="button"
              alt="Home"
            ></Link>
          </li>
          <li>
            <Link
              color="white"
              className="far fa-file fa-2x side "
              to="/Resume"
              role="button"
              alt="resume"
            ></Link>
          </li>
          <li>
            <Link
              color="white"
              className="fas fa-project-diagram fa-2x side"
              to="/portfolio"
              role="button"
              alt="projects"
            ></Link>
          </li>
        </ul>
      </li>
    </MDBSideNav>
  );
};

export default SideNavList;
