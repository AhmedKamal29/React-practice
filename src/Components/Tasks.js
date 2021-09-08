import TaskFormat from "./TaskFormat";

const Tasks = ({ tasks, onDelete, onSubmit, onLoad }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskFormat
          key={task.id}
          task={task}
          Status={task.Status}
          onDelete={onDelete}
          onSubmit={onSubmit}
          onLoad={onLoad}
        />
      ))}
    </div>
  );
};

export default Tasks;
