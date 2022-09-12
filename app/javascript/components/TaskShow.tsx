import { useParams, useNavigate } from "react-router-dom";
import { useTaskQuery } from "../graphql/generated";
import TaskDelete from "./TaskDelete";
import FlashMessage from "./FlashMessage";

const TaskShow = () => {
  const navigate = useNavigate();
  const onClickTaskShow = () => navigate(`/tasks/${id}/edit`);
  const { id } = useParams();
  const {
    loading,
    error,
    data: { task } = {},
  } = useTaskQuery({ variables: { id: id as string } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Not found</p>;
  if (!task) return <p>Not found</p>;
  return (
    <div>
      <FlashMessage />
      <p>{task.id}</p>
      <p>{task.title}</p>
      <p style={{ whiteSpace: "pre-line" }}>{task.body}</p>
      <p>{task.limitAt ? task.limitAt : "期限未登録"}</p>
      <button onClick={onClickTaskShow}>編集</button>
      <TaskDelete id={task.id} />
    </div>
  );
};

export default TaskShow;
