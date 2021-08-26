import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";
import { BsFillMicFill } from "react-icons/bs";

const Inputs = ({ placeholder }) => {
  const onClick = () => {
    console.log("adding a task");
  };
  return (
    <div className="TextArea">
      <TextField
        id="outlined-basic"
        label="What is your task"
        variant="outlined"
      >
        <BsFillMicFill className="micIcon" />
      </TextField>
      <Button text="Add Task" onClick={onClick} />
    </div>
  );
};

Inputs.propTypes = {
  placeholder: PropTypes.string,
};

export default Inputs;
