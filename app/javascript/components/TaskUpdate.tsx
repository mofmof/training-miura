import { TaskStateEnum, useUpdateTaskMutation } from "../graphql/generated";
import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskStateLabel, TaskState } from "./Enum";

type Props = {
  task: {
    __typename?: "Task" | undefined;
    id: string;
    title: string;
    body?: string | null | undefined;
    state: TaskStateEnum;
    limitOn: string;
  };
};

const TaskUpdate: FC<Props> = (props) => {
  const { task } = props;
  const [messages, setMessages] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  const [updateTask] = useUpdateTaskMutation({
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      navigate(`/tasks/${id}`, { state: { msg: "タスクが更新されました" } });
    },
  });
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);
  const [limitOn, setLimitOn] = useState(task.limitOn);
  const [state, setState] = useState(task.state);
  const onClickUpdateTask = () => {
    updateTask({
      variables: {
        id: task.id,
        params: {
          title: title,
          body: body,
          limitOn: limitOn,
          state: state,
        },
      },
    });
  };
  return (
    <>
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <textarea
          value={body ?? ""}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        <input
          type="date"
          value={limitOn}
          onChange={(e) => setLimitOn(e.target.value)}
        />
      </div>
      <div>
        <input
          type="radio"
          value={TaskState.unstarted}
          name="taskstate"
          defaultChecked={task.state == "unstarted"}
          onChange={(e) => setState(e.target.value as TaskStateEnum)}
        />
        {TaskStateLabel(TaskState.unstarted)}
        <input
          type="radio"
          value={TaskState.started}
          name="taskstate"
          defaultChecked={task.state == "started"}
          onChange={(e) => setState(e.target.value as TaskStateEnum)}
        />
        {TaskStateLabel(TaskState.started)}
        <input
          type="radio"
          value={TaskState.finished}
          name="taskstate"
          defaultChecked={task.state == "finished"}
          onChange={(e) => setState(e.target.value as TaskStateEnum)}
        />
        {TaskStateLabel(TaskState.finished)}
      </div>
      <div>
        <button onClick={onClickUpdateTask}>更新</button>
      </div>
    </>
  );
};

export default TaskUpdate;
