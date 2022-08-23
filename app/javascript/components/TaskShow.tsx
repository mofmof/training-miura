import { useQuery, gql } from "@apollo/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const FETCH_TASK = gql`
  query ($id: Int) {
    task(id: 3) {
      id
      title
    }
  }
`;

type Task = {
  id: number;
  title: string;
	body: Text;
}

const TaskShow = () => {
	const { data: { task } = {} } = useQuery(FETCH_TASK);
	// const { data: { id } = { task } } = useQuery(FETCH_TASK);
  // let { id } = useParams();

  return (
    <div>
      <p> {task.title}</p>
    </div>
  );
}

export default TaskShow;
