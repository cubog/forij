import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./FormInput.css";
import AddIcon from "@material-ui/icons/Add";

const FormInput = ({ title, id, addInput, items = 1, register }) => {
  useEffect(() => {}, [items]);

  const inputs = [];
  for (let i = 0; i < items; i++) {
    inputs.push(
      <input
        style={{ marginBottom: 10 }}
        type="text"
        name={id + (items > 1 ? i : "")}
        className="form-control"
        ref={register}
      />
    );
  }
  return (
    <div className="FormInput">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          {title}
        </label>
        {addInput && (
          <div style={{ marginLeft: 20 }} onClick={() => addInput(items + 1)}>
            <AddIcon />
          </div>
        )}
      </div>
      {inputs}
    </div>
  );
};

FormInput.propTypes = {};

FormInput.defaultProps = {};

export default FormInput;
