import { useQuery, gql } from "@apollo/client";

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
}

const App = () => {
  const { data: { tasks = [] } = {} } = useQuery(FETCH_TASKS);

  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default App;
