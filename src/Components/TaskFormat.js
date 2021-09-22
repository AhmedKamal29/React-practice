import React, { useState } from "react";
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

const TaskFormat = ({ task, onDelete, onSubmit, onLoad }) => {
  const classes = useStyles();
  const [priority, setpriority] = useState(task.Priority || 2);

  return (
    <div>
      <Checkbox
        checked={task.Status}
        classes={{
          root: classes.root,
        }}
        onClick={(e) => {
          // async if the getTodos is uncommented
          e.preventDefault();
          // await getTodos();
          onSubmit(task._id, task.Status);
        }}
        color="success"
      />
      <div
        id="task"
        name="task"
        className={`${
          task.Status
            ? "taskDone"
            : priority === 3
            ? "taskUndone lowlvl"
            : priority === 1
            ? "taskUndone highlvl"
            : "taskUndone midlvl"
        }`}
      >
        <h3>{task.Task}</h3>
        <ImCancelCircle
          className="DelIcon"
          onClick={() => onDelete(task._id)} // dont forget the id in the mongo db starts with _
        />
      </div>
    </div>
  );
};

export default TaskFormat;
