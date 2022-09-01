import { useDeleteTaskMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

const TaskDelete: React.FC<Props> = (props) => {
  const { id } = props;
  const [deleteTask] = useDeleteTaskMutation({ refetchQueries: ["tasks"] });
  const navigate = useNavigate();
  const deleteRedirect = () => navigate("/");
  const onClickTaskDelete = () => {
    deleteTask({ variables: { id: id } });
    deleteRedirect();
  };

  return <button onClick={onClickTaskDelete}>削除</button>;
};

export default TaskDelete;
