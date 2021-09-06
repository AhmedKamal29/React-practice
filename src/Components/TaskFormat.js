import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { ImCancelCircle } from "react-icons/im";

const useStyles = makeStyles({
  root: {
    width: "25px",
    height: "30px",
    position: "absolute",
    margin: "13px 0px",
    color: "#000000",
    label: {
      textTransform: "capitalize",
    },
  },
});

const TaskFormat = ({ task, onDelete, changeStatus }) => {
  const classes = useStyles(); // defining a class for the style of checkbox material

  // this is a function to swith the style of the task component when the chek mark is selected
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
        onClick={() => {
          TaskDone();
          changeStatus(task._id);
        }}
      />
      <div id="task" name="task" className="taskUndone">
        <h4>
          {task.Task}
          <ImCancelCircle
            className="trashIcon"
            onClick={() => onDelete(task._id)} // dont forget the id in the mongo db starts with _
          />
        </h4>
      </div>
    </div>
  );
};

export default TaskFormat;
