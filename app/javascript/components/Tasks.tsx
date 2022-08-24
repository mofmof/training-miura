import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const FETCH_TASKS = gql`
  query {
    tasks {
      id
      title
    }
  }
`;

type Task = {
  id: number;
  title: string;
};

const Tasks = () => {
  const { data: { tasks = [] } = {} } = useQuery(FETCH_TASKS);

  return (
    <div>
      {tasks.map((task: Task) => (
        <Link to={`/tasks/${task.id}`} key={task.id}>
          {task.title}
        </Link>
      ))}
    </div>
  );
};

export default Tasks;
