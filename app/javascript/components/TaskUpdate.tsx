import { useUpdateTaskMutation, useTaskQuery } from "../graphql/generated";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskStateLabel, TaskState } from "./Enum";

const TaskUpdate = () => {
  const { id } = useParams();
  const { data: { task } = {} } = useTaskQuery({
    variables: { id: id as string },
  });

  const navigate = useNavigate();
  const updateRedirect = () => navigate(`/tasks/${id}`);
  const [updateTask] = useUpdateTaskMutation();
  const [title, setTitle] = useState(task?.title);
  const [body, setBody] = useState(task?.body);
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
        },
      });
      updateRedirect();
    }
  };
  return (
    <>
      <div>
        <p>{titleVlidateBoolean && titleVlidateMessage}</p>
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
          value={limitAt}
          onChange={(e) => setLimitAt(e.target.value)}
        />
      </div>
      <div>
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
      </div>
    </>
  );
};

export default TaskUpdate;
