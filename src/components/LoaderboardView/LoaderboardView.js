import React from "react";
import PropTypes from "prop-types";
import "./LoaderboardView.css";
import { MDBContainer, MDBCol } from "mdbreact";
import qrCode from "../../assets/qrcode.svg";

const LoaderboardView = () => (
  <div className="LoaderboardView" style={{ paddingBottom: 70 }}>
    <MDBContainer>
      <MDBCol md="6">
        <p className="h4 text-center mb-4" style={{ paddingTop: 10 }}>
          Leaderboard
        </p>
        <h3 style={{ marginBottom: 20, marginTop: 20 }}>Current Points</h3>
        <p>
          <span style={{ fontWeight: 500 }}>You have driven:</span> 14 miles (36
          miles to reach new milestone)
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>You have sorted:</span> 2 donation
          tasks
        </p>
        <p>
          <span style={{ fontWeight: 500 }}>Your referrals:</span> Publix
          grocery store at coral way
        </p>
        <h3 style={{ marginBottom: 20, marginTop: 20 }}>
          Giftcards and Coupins
        </h3>
        <p>
          <span style={{ fontWeight: 500, marginRight: 10 }}>
            $5 Gift Card at Sedano's
          </span>
          Reedeemed
        </p>
        <p>
          <span style={{ fontWeight: 500, marginRight: 10 }}>
            $10 Coupon at Starbucks
          </span>
          Use Coupon
        </p>
        <h3 style={{ marginBottom: 20, marginTop: 20 }}>
          Personal Referral Code
        </h3>
        <h4>speed-racer-forij</h4>
        <img src={qrCode} style={{ width: 150 }} />
      </MDBCol>
    </MDBContainer>
  </div>
);

LoaderboardView.propTypes = {};

LoaderboardView.defaultProps = {};

export default LoaderboardView;
