import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h4>
        {task.text} <FaTrashAlt className="trashIcon" />
      </h4>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
