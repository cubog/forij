import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./FeedView.css";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardView from "../CardView/CardView";

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
  const classes = useStyles();
  const [donations, setDonations] = useState(null);

  useEffect(() => {
    if (donations === null) {
      getDonations();
    }
  }, [donations]);

  const getDonations = async () => {
    fetch("default/getDonationsBucketItems", {
      method: "GET", // *GET, POST, PUT, DELETE, etc. // no-cors, *cors, same-origin\
    })
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
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
          {donations !== null &&
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
