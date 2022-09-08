import { useDeleteTaskMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

const TaskDelete: React.FC<Props> = (props) => {
  const { id } = props;
  const navigate = useNavigate();
  const [deleteTask] = useDeleteTaskMutation({
    refetchQueries: ["tasks"],
    onError: () => {
      navigate(`/tasks/${id}`, { state: { msg: "削除失敗" } });
    },
    onCompleted: () => {
      navigate("/", { state: { msg: "削除成功" } });
    },
  });

  const onClickTaskDelete = () => {
    deleteTask({ variables: { id: id } });
  };

  return <button onClick={onClickTaskDelete}>削除</button>;
};

export default TaskDelete;
