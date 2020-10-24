import React from "react";
import PropTypes from "prop-types";
import "./FeedView.css";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Nav from "../Nav/Nav";

const FeedView = () => {
  return (
    <div className="FeedView">
      This is the feed
      <Nav />
    </div>
  );
};

FeedView.propTypes = {};

FeedView.defaultProps = {};

export default FeedView;
