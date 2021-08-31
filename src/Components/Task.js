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
    if (document.getElementById("task").classList.contains("taskUndone")) {
      document.getElementById("task").classList.remove("taskUndone");
      document.getElementById("task").classList.add("taskDone");
    } else if (document.getElementById("task").classList.contains("taskDone")) {
      document.getElementById("task").classList.remove("taskDone");
      document.getElementById("task").classList.add("taskUndone");
    }
  };

  return (
    <div>
      <Checkbox
        classes={{
          root: classes.root,
        }}
        onClick={TaskDone}
      />
      <div id="task" className="taskUndone">
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
