import { useParams } from "react-router-dom";
import { useTaskQuery } from "../graphql/generated";

const TaskShow = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    data: { task } = {},
  } = useTaskQuery({ variables: { id: id as string } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error.message}`;</p>;
  if (!task) return <p>Not found</p>;
  return (
    <div>
      <p>{task.id}</p>
      <p>{task.title}</p>
      <p style={{ whiteSpace: "pre-line" }}>{task.body}</p>
    </div>
  );
};

export default TaskShow;
