import React, { useState } from "react";
import PropTypes from "prop-types";
import "./EditView.css";
import Nav from "../Nav/Nav";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import FormInput from "../FormInput/FormInput";

const EditView = ({ title }) => {
  const [items, addItem] = useState(1);
  return (
    <div className="EditView">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">
                {title || "Create donation"}
              </p>
              <div>
                <FormInput title="Donation Items" id="item0" />
              </div>

              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

EditView.propTypes = {};

EditView.defaultProps = {};

export default EditView;
