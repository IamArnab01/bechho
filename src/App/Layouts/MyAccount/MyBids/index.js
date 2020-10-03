import React, { Component } from "react";
import { Helmet } from "react-helmet";
import MyBidsCard from "./card";
import Loader from "../../../Loader/spinner";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MyBids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBids: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.fetchMyBids();
  }

  fetchMyBids = () => {
    axios
      .get(`${API}/product/getbids/${this.props.user._id}`)
      .then((res) => {
        this.setState({
          myBids: res.data.bid,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        toast(err.error, { type: "warning" });
      });
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="Bechho | %s" title="My Bids" />

        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="container mt-4 th-my-items-mob">
            <p className="th-mybids-header">Used Products Bids</p>
            <div className="d-lg-flex flex-wrap justify-content-lg-between th-mybids-col">
              {this.state.myBids.length > 0 ? (
                this.state.myBids.map((item, index) => {
                  return (
                    <MyBidsCard
                      key={index}
                      title={item.title}
                      askPrice={item.askedprice}
                      offerPrice={item.bidOffer}
                      status={item.status}
                      prodId={item.productId}
                    />
                  );
                })
              ) : (
                <div>No bids yet</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

MyBids.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MyBids);
