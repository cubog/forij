import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Restore, Favorite, LocationOnIcon } from "@material-ui/icons";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FeedView from "./components/FeedView/FeedView";
import { useHistory } from "react-router-dom";
import EditView from "./components/EditView/EditView";
import ListingView from "./components/ListingView/ListingView";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/feedview" component={FeedView}></Route>
          <Route path="/editview" component={EditView}></Route>
          <Route path="/listingview" component={ListingView}></Route>
          <Route exact path="/">
            <Redirect to="/feedview" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
