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

const TaskFormat = ({ task, onDelete, onSubmit }) => {
  const classes = useStyles(); // defining a class for the style of checkbox material
  const [done, setDone] = useState(false);

  return (
    <div>
      <Checkbox
        classes={{
          root: classes.root,
        }}
        onClick={() => {
          setDone((done) => !done);
          onSubmit(task._id, task.Status);
        }}
      />
      <div
        id="task"
        name="task"
        className={`${done ? "taskDone" : "taskUndone"}`}
      >
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
