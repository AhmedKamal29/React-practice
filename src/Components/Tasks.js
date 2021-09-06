import TaskFormat from "./TaskFormat";

const Tasks = ({ tasks, onDelete, onSubmit, onChange }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskFormat
          key={task.id}
          task={task}
          Status={task.Status}
          onDelete={onDelete}
          onSubmit={onSubmit}
        />
      ))}
    </div>
  );
};

export default Tasks;
