import { useState } from "react";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
    },
    {
      id: 3,
      text: "Finish the Programing Task",
      day: "Feb 9th at 4:30pm",
    },
  ]);
  // add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //delete task
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
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

export default App;
