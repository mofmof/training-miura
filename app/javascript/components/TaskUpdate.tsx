import { useUpdateTaskMutation } from "../graphql/generated";
import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskStateLabel, TaskState } from "./Enum";

type Props = {
  task: {
    __typename?: "Task" | undefined;
    id: string;
    title: string;
    body?: string | null | undefined;
    limitOn?: any;
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
  const [body, setBody] = useState(task?.body);
<<<<<<< HEAD
  const [limitAt, setLimitAt] = useState(task?.limitAt);
  const [state, setState] = useState(task?.state);
  const [titleVlidateBoolean, setTitleVlidateBoolean] = useState(false);
  const titleVlidateMessage = "タイトルが未入力です";
  const titleValidate = () => {
    if (title === "") {
      setTitleVlidateBoolean(true);
    } else {
      updateTask({
        variables: {
          id: task?.id as string,
          params: {
            title: title as string,
            body: body as string,
            limitAt: limitAt as Date,
            state: state as number,
          },
=======
  const [limitOn, setLimitAt] = useState(task?.limitOn);
  const onClickUpdateTask = () => {
    updateTask({
      variables: {
        id: task.id,
        params: {
          title: title,
          body: body as string,
          limitOn: limitOn,
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
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
          value={body as string}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        <input
          type="date"
          value={limitOn}
          onChange={(e) => setLimitAt(e.target.value)}
        />
      </div>
      <div>
<<<<<<< HEAD
        <input
          type="radio"
          value={TaskState.unstarted}
          name="taskstate"
          onChange={(e) => setState(e.target.value as any)}
        />
        {TaskStateLabel(TaskState.unstarted)}
        <input
          type="radio"
          value={TaskState.started}
          name="taskstate"
          onChange={(e) => setState(e.target.value as any)}
        />
        {TaskStateLabel(TaskState.started)}
        <input
          type="radio"
          value={TaskState.finished}
          name="taskstate"
          onChange={(e) => setState(e.target.value as any)}
        />
        {TaskStateLabel(TaskState.finished)}
      </div>
      <div>
        <button onClick={titleValidate}>更新</button>
=======
        <button onClick={onClickUpdateTask}>更新</button>
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
      </div>
    </>
  );
};

export default TaskUpdate;
