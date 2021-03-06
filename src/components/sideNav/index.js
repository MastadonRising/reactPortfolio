import React from "react";
import { MDBIcon, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import SideNaveList from "../sideNavList";

class SideNavPage extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBBtn onClick={this.handleToggle}>
            <MDBIcon icon="bars" />
          </MDBBtn>
        </MDBRow>
        {isOpen ? <SideNaveList /> : null}
      </MDBContainer>
    );
  }
}

export default SideNavPage;
