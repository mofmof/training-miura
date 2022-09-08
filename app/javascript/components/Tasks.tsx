import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";

const Tasks = () => {
  const { data: { tasks = [] } = {} } = useTasksQuery();
  const tasksSort = [...tasks];
  const renderTasks = (taskArray: typeof tasks) => {
    taskArray.sort((a: any, b: any) => {
      const aTaskDate = new Date(a.createdAt);
      const bTaskDate = new Date(b.createdAt);
      return aTaskDate < bTaskDate ? 1 : -1;
    });
    return taskArray.map((task) => (
      <li key={task.id}>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderTasks(tasksSort)}</ul>
    </div>
  );
};

export default Tasks;
