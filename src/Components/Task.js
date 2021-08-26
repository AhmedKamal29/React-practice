import { FaTrashAlt } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h4>
        {task.text}{" "}
        <FaTrashAlt className="trashIcon" onClick={() => onDelete(task.id)} />
      </h4>
    </div>
  );
};

export default Task;
