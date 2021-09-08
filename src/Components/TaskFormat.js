import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { ImCancelCircle } from "react-icons/im";
// import axios from "axios";

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
  const [done, setDone] = useState(task.Status || false);

  // const getTodos = () => {
  //   axios.get("http://localhost:5000/task").then((res) => {
  //     setTasks(res.data);
  //   });
  // };

  return (
    <div>
      <Checkbox
        checked={done}
        classes={{
          root: classes.root,
        }}
        onClick={(e) => {
          // async if the getTodos is uncommented
          e.preventDefault();
          // await getTodos();
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
