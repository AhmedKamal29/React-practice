import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BsFillMicFill } from "react-icons/bs";
import Button from "./Button";

const Inputs = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text });

    setText("");
  };

  return (
    <form className="TextArea" onSubmit={onSubmit}>
      <FormControl variant="outlined">
        <InputLabel className="inputLabel">What is your task</InputLabel>
        <OutlinedInput
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
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
        <Button type="submit" text="Add Task" />
      </FormControl>
    </form>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
};

export default Inputs;
