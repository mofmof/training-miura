import { useQuery, gql } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const FETCH_TASK = gql`
  query ($id: ID!) {
    task(id: $id) {
      id
      title
			body
    }
  }
`;

type Task = {
  id: number;
  title: string;
	body: Text;
}

const TaskShow = () => {
  const { id } = useParams();
	const { loading, error, data: {task} = {}} = useQuery(FETCH_TASK, { variables: { id: id }});
  if (loading) return <p>Loading...</p>
  if (error) return <p>`Error! ${error.message}`;</p>

  return (
    <div>
      <p>{task.id}</p>
			<p>{task.title}</p>
			<p>{task.body}</p>
    </div>
  );
}

export default TaskShow;
