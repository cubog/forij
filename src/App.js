import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FeedView from "./components/FeedView/FeedView";
import { useHistory } from "react-router-dom";
import EditView from "./components/EditView/EditView";
import ListingView from "./components/ListingView/ListingView";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/feedview" component={FeedView}></Route>
          <Route path="/editview" component={EditView}></Route>
          <Route path="/listingview" component={ListingView}></Route>
        </Switch>
        <Nav />
      </Router>
    </div>
  );
};
export default App;
