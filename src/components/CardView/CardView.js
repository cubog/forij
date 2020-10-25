import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CardView.css";
import { Grid, ButtonBase, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import car from "../../assets/car.svg";
import box from "../../assets/box.svg";
import check from "../../assets/check.svg";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // height: 150,
    margin: "10px 20px",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    // height: 128,
  },
  // img: {
  //   margin: "auto",
  //   display: "block",
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  // },
}));

const CardView = ({ item }) => {
  const history = useHistory();
  const classes = useStyles();
  const viewListing = (id) => {
    history && history.push(`/listingview?id=${id}`);
  };
  return (
    <div className="CardView">
      <div className={classes.root}>
        <MDBCol>
          <MDBCard onClick={() => viewListing(item.id)}>
            <MDBCardImage className="img-fluid" src={item.logo} waves />
            <MDBCardBody>
              <MDBCardTitle>{item.Name}</MDBCardTitle>
              <MDBCardText></MDBCardText>
              <MDBCardText>
                Pickup: {item["pick-up-from"]} to {item["pick-up-until"]}
              </MDBCardText>
              <MDBCardText>Address: {item.address}</MDBCardText>
              <Grid item>
                {item.stocked && <img src={car} />}
                {item.collected && <img src={box} />}
                {item.delivered && item.checked && item.stocked && (
                  <img src={check} />
                )}
              </Grid>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* <Paper
          className={classes.paper}
          onClick={() => {
            viewListing(item.id);
          }}
        >

          <Grid container spacing={2}>
            {/* <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="/static/images/grid/complex.jpg"
                />
              </ButtonBase>
            </Grid> 
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {item.Name}
                  </Typography>
                  {item.items.map((specificItem) => {
                    return (
                      <Typography variant="body2" gutterBottom>
                        {specificItem}
                      </Typography>
                    );
                  })}
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {item["pick-up-from"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item["pick-up-until"]}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {item.address}
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
                <img src={item.logo} />
              </Grid>
            </Grid>
          </Grid>
        </Paper> */}
      </div>
    </div>
  );
};

CardView.propTypes = {};

CardView.defaultProps = {};

export default CardView;
