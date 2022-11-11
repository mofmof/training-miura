import { useParams, useNavigate, Link } from "react-router-dom";
import { useTaskQuery } from "../graphql/generated";
import TaskDelete from "./TaskDelete";
import FlashMessage from "./FlashMessage";
import { TaskStateLabel } from "./Enum";
import { TaskLabels } from "./TaskLabels";
import { UnaddedLabels } from "./UnaddedLabels";

const TaskShow = () => {
  const navigate = useNavigate();
  const onClickTaskShow = () => navigate(`/tasks/${id}/edit`);
  const { id } = useParams();
  if (!id) return <></>;
  const {
    loading,
    error,
    data: { task } = {},
  } = useTaskQuery({ variables: { id: id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Not found</p>;
  if (!task) return <p>Not found</p>;

  return (
    <div>
      <FlashMessage />
      <Link to={"/"}>トップページへ</Link>
      <div>
        <Link to={`/tasks/${id}/users`}>タスク共有設定</Link>
      </div>
      <p>{task.id}</p>
      <p>{task.title}</p>
      <p>{TaskStateLabel(task.state)}</p>
      <p style={{ whiteSpace: "pre-line" }}>{task.body}</p>
      <p>{task.limitOn ? task.limitOn : "期限未登録"}</p>
      <button onClick={onClickTaskShow}>編集</button>
      <TaskDelete id={task.id} />
      {task.imageUrl && <img src={task.imageUrl} />}
      <TaskLabels id={task.id} labels={task.labels} />
      <UnaddedLabels id={task.id} />
    </div>
  );
};

export default TaskShow;
