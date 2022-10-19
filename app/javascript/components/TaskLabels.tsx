import { useNavigate } from "react-router-dom";
import {
  useTaskLabelsQuery,
  useAddLabelToTaskMutation,
  useRemoveLabelFromTaskMutation,
} from "../graphql/generated";

type Props = {
  id: string;
  addFlg: boolean;
};

const TaskLabels: React.FC<Props> = (props) => {
  const { id, addFlg } = props;
  const navigate = useNavigate();

  const { data: { taskLabels = [] } = {} } = useTaskLabelsQuery({
    variables: { id: id, addFlg: addFlg },
  });

  const [addLabel] = useAddLabelToTaskMutation({
    refetchQueries: ["taskLabels"],
    onError: () => {
      navigate("/labels", { state: { msg: "追加失敗" } });
    },
  });

  const [removeLabel] = useRemoveLabelFromTaskMutation({
    refetchQueries: ["taskLabels"],
    onError: () => {
      navigate("/labels", { state: { msg: "削除失敗" } });
    },
  });
  const addLabelEvent = (labelId: string) => {
    addLabel({
      variables: {
        taskId: id,
        labelId: labelId,
      },
    });
  };

  const removeLabelEvent = (labelId: string) => {
    removeLabel({
      variables: {
        taskId: id,
        labelId: labelId,
      },
    });
  };

  const onClickAddOrRemoveLabel = (labelId: string) => {
    addFlg ? addLabelEvent(labelId) : removeLabelEvent(labelId);
  };

  const addLabelClass = "ml-3 bg-green-700 text-white rounded px-2 py-1";
  const removeLabelClass = "ml-3 bg-red-700 text-white rounded px-2 py-1";

  return (
    <>
      <div className="mt-10">
        {addFlg ? "未追加のラベル" : "追加済のラベル"}
        {taskLabels.map((label) => (
          <div key={label.id}>
            {label.name}
            <button
              className={addFlg ? addLabelClass : removeLabelClass}
              onClick={() => onClickAddOrRemoveLabel(label.id)}
            >
              {addFlg ? "追加" : "削除"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskLabels;
