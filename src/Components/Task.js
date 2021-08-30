import { FaTrashAlt } from "react-icons/fa";
// import TaskList from "./TaskList";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h4>
        {task.Task} {/* <TaskList /> */}
        <FaTrashAlt className="trashIcon" onClick={() => onDelete(task.id)} />
      </h4>
    </div>
  );
};

export default Task;
