import { useDeleteTaskMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

const TaskDelete: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const deleteSuccessRedirect = () =>
    navigate("/", { state: { msg: "削除成功" } });
  const deleteFailRedirect = () =>
    navigate(`/tasks/${id}`, { state: { msg: "削除失敗" } });

  const { id } = props;
  const [deleteTask] = useDeleteTaskMutation({
    refetchQueries: ["tasks"],
    onError: (error) => {
      if (error) deleteFailRedirect();
      return;
    },
  });
  const onClickTaskDelete = () => {
    deleteTask({ variables: { id: id } });
    deleteSuccessRedirect();
  };

  return <button onClick={onClickTaskDelete}>削除</button>;
};

export default TaskDelete;
