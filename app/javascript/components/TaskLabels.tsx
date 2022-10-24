import { useNavigate } from "react-router-dom";
import { useRemoveLabelFromTaskMutation } from "../graphql/generated";

type Props = {
  labels: {
    __typename?: "Label" | undefined;
    id: string;
    name: string;
  }[];
  id: string;
};

export const TaskLabels: React.FC<Props> = (props) => {
  const { id, labels } = props;
  const navigate = useNavigate();

  const [removeLabel] = useRemoveLabelFromTaskMutation({
    refetchQueries: ["unaddedTaskLabels", "task"],
    onError: () => {
      navigate("/labels", { state: { msg: "削除失敗" } });
    },
  });

  const onClickRemoveLabel = (labelId: string) => {
    removeLabel({
      variables: {
        taskId: id,
        labelId: labelId,
      },
    });
  };

  return (
    <>
      <div className="mt-10">
        追加済のラベル
        {labels.map((label) => (
          <div key={label.id}>
            {label.name}
            <button
              className="ml-3 bg-red-700 text-white rounded px-2 py-1"
              onClick={() => onClickRemoveLabel(label.id)}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
