import { useUpdateTaskMutation, useTaskQuery } from "../graphql/generated";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskUpdate = () => {
  const [messages, setMessages] = useState("");
  const { id } = useParams();
  const { data: { task } = {} } = useTaskQuery({
    variables: { id: id as string },
  });

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
  const [title, setTitle] = useState(task?.title);
  const [body, setBody] = useState(task?.body);
  const [limitOn, setLimitAt] = useState(task?.limitOn);
  const onClickUpdateTask = () => {
    updateTask({
      variables: {
        id: task?.id as string,
        params: {
          title: title as string,
          body: body as string,
          limitOn: limitOn as Date,
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
        <button onClick={onClickUpdateTask}>更新</button>
      </div>
    </>
  );
};

export default TaskUpdate;
