import React, { Component } from "react";
import CategoryTop from "../../Components/Category/CategoryTop/CategoryTop";
// import Other from "../../Components/Category/OtherCategory/OtherCategories";/

class CategoryHome extends Component {
  render() {
    return (
      <div className="container mt-lg-4 mb-4 mt-5">
        <CategoryTop />
        {/* <Other /> */}
      </div>
    );
  }
}

export default CategoryHome;
