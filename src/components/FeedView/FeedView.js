import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./FeedView.css";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardView from "../CardView/CardView";
import { store } from "../../providers/ListProviders";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 150,
    margin: "20px 20px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const FeedView = () => {
  const { list: donations, setList } = useContext(store);
  const classes = useStyles();

  console.log("list", donations);

  useEffect(() => {
    if (!donations) {
      getDonations();
    }
  }, [donations]);

  const getDonations = async () => {
    fetch("default/getDonationsBucketItems", {
      method: "GET", // *GET, POST, PUT, DELETE, etc. // no-cors, *cors, same-origin\
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="FeedView">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {donations &&
            donations.length &&
            donations.map((item) => {
              console.log("item", item);
              return (
                <Grid item xs={12}>
                  <CardView item={item} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

FeedView.propTypes = {};

FeedView.defaultProps = {};

export default FeedView;
