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
import LeaderboardView from "./components/LoaderboardView/LoaderboardView";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route path="/feedview" component={FeedView}></Route>
        <Route path="/editview" component={EditView}></Route>
        <Route path="/listingview/:id" component={ListingView}></Route>
        <Route path="/leaderboard" component={LeaderboardView}></Route>
      </Switch>
      <Nav />
    </div>
  );
};
export default App;
