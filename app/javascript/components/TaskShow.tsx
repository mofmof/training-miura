import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

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
  body: string;
};

const TaskShow = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    data: { task } = {},
  } = useQuery(FETCH_TASK, { variables: { id: id } });
  const taskShow: Task = task;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error.message}`;</p>;
  return (
    <div>
      <p>{taskShow.id}</p>
      <p>{taskShow.title}</p>
      <p>{taskShow.body}</p>
    </div>
  );
};

export default TaskShow;
