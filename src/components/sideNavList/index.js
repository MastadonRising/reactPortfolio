import React from "react";
import { Link } from "react-router-dom";
import { MDBSideNav } from "mdbreact";

const SideNavList = () => {
  return (
    <MDBSideNav breakWidth={700}>
      <li>
        <ul>
          <li>
            <Link
              color="white"
              className="fa fa-home fa-2x  "
              to="/"
              role="button"
            ></Link>
          </li>
          <li></li>
          <Link
            color="white"
            className="fas fa-file fa-2x "
            to="/Resume"
            role="button"
          ></Link>
        </ul>
      </li>
    </MDBSideNav>
  );
};

export default SideNavList;
