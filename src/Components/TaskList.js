import React from "react";
import axios from "axios";
import Header from "./Header";
import Inputs from "./Inputs";
import Tasks from "./Tasks";
import { useState } from "react";
import { useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // defining the tasks

  // useEffect for rendering the data on page load
  useEffect(() => {
    axios.get("http://localhost:5000/task").then((res) => {
      setTasks(res.data);
    });
  });

  // add a task
  const addTask = (textInput) => {
    axios
      .post("http://localhost:5000/task", {
        Task: textInput,
      })
      .then((response) => {
        setTasks(response.data);
      });
  };

  //delete task
  const delTask = () => {
    axios
      .delete("http://localhost:5000/task/612de59832869c7507c5081e")
      .then((res) => {
        setTasks(res.filter((res) => res.id !== "612de59832869c7507c5081e"));
      })
      .catch((error) => {
        console.error("Something went wrong !", error);
      });

    // axios
    //   .delete(`http://localhost:5000/task/${id}`)
    //   .then((res) => {
    //     setTasks(res.filter((res) => res.id !== id));
    //   })
    //   .catch((error) => {
    //     console.error("Something went wrong !", error);
    //   });
  };

  return (
    <div>
      <Header />
      <Inputs onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} />
      ) : (
        <p className="noTasks">
          You have no tasks today <span>&#9787;</span>{" "}
        </p>
      )}
    </div>
  );
};

export default TaskList;