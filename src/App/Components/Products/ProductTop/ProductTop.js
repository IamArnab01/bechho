import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapPin } from "react-feather";
import PopUp from "../Popup/popup";

class ProductTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show: false,
      products: [],
    };
  }

  handleShowModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div>
                  <img
                    src={this.props.src}
                    alt=""
                    className="th-prod-right-img"
                  />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="th-prod-box">
                <p className="th-prod-title">{this.props.name}</p>
                <div className="mb-2 d-flex align-items-center th-prod-price-location-box">
                  <div className="d-flex align-items-center">
                    <div className="mr-3 th-prod-price">
                      ₹ {this.props.price}
                    </div>
                    <div className="d-flex align-items-center">
                      <MapPin className="mr-2" size={20} color="#332a7c" />
                      <div className="th-prod-location">{this.props.city} </div>
                    </div>
                  </div>
                  {/* for mobile screen */}
                  {this.state.width < 780 ? (
                    <Link to={"/products-offer"}>
                      <div className="th-prod-offer text-center">
                        Make an offer
                      </div>
                    </Link>
                  ) : null}
                  {/*  */}
                </div>
                <div className="th-prod-description">
                  <span className="mr-2">{this.props.description}</span>
                </div>
                {/* for laptop/tabs */}
                {this.state.width > 780 ? (
                  <div className="d-flex justify-content-center mt-5">
                    <div
                      className="th-prod-offer text-center"
                      onClick={this.handleShowModal}
                    >
                      Make an offer
                    </div>
                  </div>
                ) : null}
                {/*  */}
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.width < 780 ? <hr className="th-prod-hr-line" /> : null}
        {/* Modal */}
        <Modal show={this.state.show} size="lg" onHide={this.handleCloseModal}>
          <Modal.Body className="shadow bg-white p-0 rounded">
            <PopUp
              show={this.state.show}
              closed={this.handleCloseModal}
              prodId={this.props.prodId}
            />
          </Modal.Body>
        </Modal>
        {/*  */}
      </div>
    );
  }
}

export default ProductTop;

// export default withRouter(ProductTop);
