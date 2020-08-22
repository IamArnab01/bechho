import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrivacyPolicy from "../../../Components/KnowMore/privacyPolicy/privacyPolicy";
import LinksSidebar from "../../../Components/FooterLinkSidebar/FooterLinkSidebar";

class PrivacyPolicyHome extends Component {
  state = {
    width: window.innerWidth,
  };
  render() {
    return (
      <div className="mt-md-4 mb-md-5 mt-3 mb-3">
        {this.state.width > 800 ? (
          <Container>
            <Row>
              <Col md={3} className="d-flex justify-content-center">
                <LinksSidebar />
              </Col>
              <Col md={9}>
                <PrivacyPolicy />
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="pl-3 pr-3">
            <PrivacyPolicy />
          </div>
        )}
      </div>
    );
  }
}

export default PrivacyPolicyHome;