import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "./Button";
import { BsFillMicFill } from "react-icons/bs";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const Inputs = ({ placeholder }) => {
  const onClick = () => {
    console.log("adding a task");
  };

  return (
    <div className="TextArea">
      <FormControl variant="outlined">
        <InputLabel className="inputLabel">What is your task</InputLabel>
        <OutlinedInput
          label="what is your task"
          endAdornment={
            <InputAdornment position="end">
              <BsFillMicFill
                aria-label="toggle password visibility"
                className="micIcon"
                edge="end"
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button text="Add Task" onClick={onClick} />
    </div>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
};

export default Inputs;
