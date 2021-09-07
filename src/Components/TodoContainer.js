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
  const delTask = (id) => {
    axios
      .delete(`http://localhost:5000/task/${id}`)
      .then((res) => {
        setTasks(res.filter((res) => res.id !== id));
      })
      .catch((error) => {
        console.error("Something went wrong !", error);
      });
  };

  const StatusUpdate = (id, newStatus, e) => {
    axios
      .put(`http://localhost:5000/task/${id}`, {
        Status: newStatus,
      })
      .then((response) => {
        setTasks(response.data.Status);
      })
      .catch((error) => {
        console.error("Something went wrong !", error);
      });
  };

  return (
    <div>
      <Header />
      <Inputs onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onSubmit={StatusUpdate} />
      ) : (
        // <Tasks tasks={tasks} onDelete={delTask} />
        <p className="noTasks">
          You have no tasks today <span>&#9787;</span>{" "}
        </p>
      )}
    </div>
  );
};

export default TaskList;
