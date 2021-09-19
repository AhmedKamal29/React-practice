import React from "react";
import axios from "axios";
import Header from "./Header";
import Inputs from "./Inputs";
import Tasks from "./Tasks";
import { useState } from "react";
import { useEffect } from "react";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]); // defining the tasks

  // useEffect for rendering the data on page load
  useEffect(() => {
    getTodos();
  }, []);

  // getting all the todo
  const getTodos = () => {
    axios.get("http://localhost:5000/task").then((res) => {
      setTasks(res.data);
    });
  };

  // add a task
  const addTask = (textInput, prioritylvl) => {
    axios
      .post("http://localhost:5000/task", {
        Task: textInput,
        Priority: prioritylvl,
      })
      .then((response) => {
        setTasks((oldTasks) => [...oldTasks, response.data]);
      })
      .catch((error) => {
        console.error(
          "something went wrong while adding a task to the database"
        );
      });
  };

  //delete task
  const delTask = (id) => {
    axios
      .delete(`http://localhost:5000/task/${id}`)
      .then((res) => {
        getTodos();
      })
      .catch((error) => {
        console.error("Something went wrong !", error);
      });
  };

  // Update the status of the task
  const StatusUpdate = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/task/${id}`, {
        Status: newStatus,
      })
      .then(async (response) => {
        await getTodos();
      })
      .catch((error) => {
        console.error("Something went wrong !", error);
      });
  };

  //sort the data based on the priority
  const SortBy = (sort) => {
    axios
      .get(`http://localhost:5000/task${sort}`)
      .then(async (res) => {
        await setTasks(res.data);
      })
      .catch((error) => {
        console.error("Something went wrong while sorting the tasks");
      });
  };

  return (
    <div>
      <Header />
      <Inputs onAdd={addTask} Sorting={SortBy} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={delTask}
          onSubmit={StatusUpdate}
          onLoad={getTodos}
        />
      ) : (
        <p className="noTasks">
          You have no tasks today <span>&#9787;</span>{" "}
        </p>
      )}
    </div>
  );
};

export default TodoContainer;
