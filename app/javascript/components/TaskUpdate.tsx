import { useUpdateTaskMutation, useTaskQuery } from "../graphql/generated";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  const [titleVlidateBoolean, setTitleVlidateBoolean] = useState(false);
  const titleVlidateMessage = "タイトルが未入力です";
  const titleValidate = async () => {
    if (title === "") {
      setTitleVlidateBoolean(true);
    } else {
      await updateTask({
        variables: {
          id: task?.id as string,
          params: {
            title: title as string,
            body: body as string,
            limitAt: limitAt as Date,
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
        <button onClick={titleValidate}>更新</button>
      </div>
    </>
  );
};

export default TaskUpdate;
