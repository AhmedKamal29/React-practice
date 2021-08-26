import { useState } from "react";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import Tasks from "./Components/Tasks";
// import Task from "./Components/Task";

const App = () => {
  const [tasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Finish the Programing Task",
      day: "Feb 9th at 4:30pm",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Inputs />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
