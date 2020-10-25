import React from "react";
import PropTypes from "prop-types";
import "./DateInput.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    margingTop: theme.spacing(10),
  },
  textField: {
    width: "100%",
    background: "white",
  },
}));

const DateInput = ({ title, register, name }) => {
  const classes = useStyles();
  return (
    <div className="DateInput">
      <TextField
        id="datetime-local"
        label={title}
        name={name}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={register}
      />
    </div>
  );
};

DateInput.propTypes = {};

DateInput.defaultProps = {};

export default DateInput;
