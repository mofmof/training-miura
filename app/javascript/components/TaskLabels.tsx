import { useState } from "react";
import {
  useTaskLabelsQuery,
  useAddLabelToTaskMutation,
} from "../graphql/generated";

type Props = {
  id: string;
  addFlg: boolean;
};

const TaskLabels: React.FC<Props> = (props) => {
  const { id, addFlg } = props;
  const [messages, setMessages] = useState("");

  const { data: { taskLabels = [] } = {} } = useTaskLabelsQuery({
    variables: { id: id, addFlg: addFlg },
  });

  const [addLabel] = useAddLabelToTaskMutation({
    refetchQueries: ["taskLabels"],
    onError: (e) => {
      setMessages(e.message);
      return;
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
        {addFlg ? "未追加のラベル" : "追加済のラベル"}
        {taskLabels.map((label) => (
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

export default TaskLabels;
