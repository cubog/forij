import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";

const FormInput = ({ title, id }) => (
  <div className="FormInput">
    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
      {title}
    </label>
    <input type="text" id={id} className="form-control" />
  </div>
);

FormInput.propTypes = {};

FormInput.defaultProps = {};

export default FormInput;
