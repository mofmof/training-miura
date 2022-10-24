import { useNavigate } from "react-router-dom";
import {
  useUnaddedTaskLabelsQuery,
  useAddLabelToTaskMutation,
} from "../graphql/generated";

type Props = {
  id: string;
};

export const UnaddedLabels: React.FC<Props> = (props) => {
  const { id } = props;
  const navigate = useNavigate();

  const { data: { unaddedTaskLabels = [] } = {} } = useUnaddedTaskLabelsQuery({
    variables: { id: id },
  });

  const [addLabel] = useAddLabelToTaskMutation({
    refetchQueries: ["unaddedTaskLabels", "task"],
    onError: () => {
      navigate("/labels", { state: { msg: "追加失敗" } });
    },
  });

  const onClickAddLabel = (labelId: string) => {
    addLabel({
      variables: {
        taskId: id,
        labelId: labelId,
      },
    });
  };

  return (
    <>
      <div className="mt-10">
        未追加のラベル
        {unaddedTaskLabels.map((label) => (
          <div key={label.id}>
            {label.name}
            <button
              className="ml-3 bg-green-700 text-white rounded px-2 py-1"
              onClick={() => onClickAddLabel(label.id)}
            >
              追加
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
