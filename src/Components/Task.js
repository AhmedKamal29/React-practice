import { ImCancelCircle } from "react-icons/im";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "25px",
    height: "30px",
    position: "absolute",
    margin: "13px 0px",
    color: "#000000",
    "&$checked": {
      color: "rgb(81 191 65)",
    },
    label: {
      textTransform: "capitalize",
    },
  },
});

const Task = ({ task, onDelete }) => {
  const classes = useStyles();
  const TaskDone = () => {
    document.getElementById("task").className = "done";
  };
  return (
    <div>
      <Checkbox
        classes={{
          root: classes.root,
        }}
        onClick={() => TaskDone}
      />
      <div id="task" className="task">
        <h4>
          {task.Task}
          <ImCancelCircle
            className="trashIcon"
            onClick={() => onDelete(task.id)}
          />
        </h4>
      </div>
    </div>
  );
};

export default Task;
