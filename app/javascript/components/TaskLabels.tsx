import { useParams, useNavigate, Link } from "react-router-dom";
import { useTaskLabelsQuery } from "../graphql/generated";

type Props = {
  id: string;
  addFlg: boolean;
};

const TaskLabels: React.FC<Props> = (props) => {
  const { id, addFlg } = props;
  console.log(id);
  console.log(addFlg);

  const { data: { taskLabels = [] } = {} } = useTaskLabelsQuery({
    variables: { id: id, addFlg: addFlg },
  });

  return (
    <>
      <div className="mt-10">
        {addFlg ? "未追加のラベル" : "追加済のラベル"}
        {taskLabels.map((label) => (
          <div key={label.id}>{label.name}</div>
        ))}
      </div>
    </>
  );
};

export default TaskLabels;
