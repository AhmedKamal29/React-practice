import TaskFormat from "./TaskFormat";

const Tasks = ({ tasks, onDelete, onSubmit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskFormat
          key={task.id}
          task={task}
          Status={task.Status}
          Priority={task.Priority}
          onDelete={onDelete}
          onSubmit={onSubmit}
        />
      ))}
    </div>
  );
};

export default Tasks;
