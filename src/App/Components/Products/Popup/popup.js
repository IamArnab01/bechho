import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Cancel from "../../../Assets/Images/Products/Cancel.png";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      price: "",
      checked: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // form_data.append("price", this.state.price);
    // form_data.append("checked", this.state.checked);
    console.log(this.state.price);
    console.log(this.state.checked);
  };

  render() {
    return (
      <div className="th-prod-popup-box">
        <div className="d-flex justify-content-around align-items-center th-header-box">
          <div className="th-prod-popup-header">Enter offer price</div>
          {this.state.width > 780 ? (
            <div className="d-flex align-items-center">
              <span className="th-prod-popup-close-txt mr-3">Close</span>
              <img
                src={Cancel}
                alt=""
                onClick={this.props.closed}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : null}
        </div>
        <div className="th-prod-content-box d-lg-flex justify-content-lg-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                placeholder="Your offer price"
                className="th-offer-price"
                onChange={this.handleChange}
                id="price"
                value={this.state.price}
              />
            </Form.Group>
            <div className="">
              <input
                type="range"
                min="1"
                max="10"
                value="10"
                class="th-range-slider"
              />
              <div className="d-flex justify-content-between mt-3 mb-md-5">
                <div>
                  <p className="m-0 th-min-price">₹ 599</p>
                  <p className="ml-3 th-min-price-tag">MIN</p>
                </div>
                <div>
                  <p className="m-0 th-max-price">₹ 5999</p>
                  <p className="ml-3 th-max-price-tag">MAX</p>
                </div>
              </div>
            </div>

            <Form.Group className="d-flex mb-md-5 th-mob-checkbox">
              <Form.Check
                type="checkbox"
                className="mr-2"
                onClick={this.handleClick}
                id="checked"
                value={this.state.checked}
              />
              <div className="th-check-terms">
                <p className="m-0"> By clicking the button, you agree to our</p>
                <p className="m-0"> Terms & Conditions and Privacy Policy.</p>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button className="th-offer" type="submit">
                Make an offer
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Popup;