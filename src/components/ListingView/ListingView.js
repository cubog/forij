import React from "react";
import PropTypes from "prop-types";
import "./ListingView.css";
import Nav from "../Nav/Nav";

const ListingView = () => (
  <div className="ListingView">
    ListingView Component
    <Nav />
  </div>
);

ListingView.propTypes = {};

ListingView.defaultProps = {};

export default ListingView;
