import React, { useContext } from "react";
import "./ListingView.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { useParams } from "react-router";

import { store } from "../../providers/ListProviders";

const ListingView = ({ title, match, history }) => {
  const { list: donations, setList } = useContext(store);
  let params = match.params;
  const [donation] = donations.filter((item) => {
    console.log("item", item);
    return item.id === parseInt(params.id);
  });

  return (
    <div className="ListingView" style={{ paddingBottom: 70 }}>
      <MDBContainer>
        <MDBCol md="6">
          <p className="h4 text-center mb-4" style={{ paddingTop: 10 }}>
            {title || "Accept donation"}
          </p>
          <label className="grey-text">Description:</label>
          <p>{donation.Name}</p>
          <label className="grey-text">Items:</label>
          {donation.items.map((it) => {
            return <p>{it}</p>;
          })}
          <label className="grey-text">Pickup location:</label>
          <p>{donation.address}</p>
          <label className="grey-text">Pickup time frame:</label>
          <p>
            {donation["pick-up-from"]} to {donation["pick-up-until"]}
          </p>
          <label className="grey-text">Tasks to fulfill:</label>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultChecked1"
              onClick={(e) => {
                // donation["collected"] = e.target.checked;
              }}
            />
            <label className="custom-control-label" htmlFor="defaultChecked1">
              Pickup and Deliver
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultChecked2"
            />
            <label className="custom-control-label" htmlFor="defaultChecked2">
              Sort at facility
            </label>
          </div>
          <div className="text-center mt-4">
            <MDBBtn
              color="red"
              onClick={() => {
                history.push("/feedview");
              }}
            >
              Cancel
            </MDBBtn>
            <MDBBtn
              color="indigo"
              onClick={() => {
                // donation["collected"] = true;
                // const donation = donations.map((item) => {
                //   if (item.id === donation.id) {
                //     return donation;
                //   }
                //   return item;
                // });
                history.push("/feedview");
              }}
            >
              Accept
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBContainer>
    </div>
  );
};

ListingView.propTypes = {};

ListingView.defaultProps = {};

export default ListingView;
