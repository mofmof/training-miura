import { TaskStateEnum, useCreateTaskMutation } from "../graphql/generated";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputTask = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState("");
  const [createTask] = useCreateTaskMutation({
    refetchQueries: ["tasks"],
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      navigate("/", { state: { msg: "タスクが作成されました" } });
    },
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [limitOn, setLimitOn] = useState("");
  const [image, setImage] = useState<File>();
  const state: TaskStateEnum = TaskStateEnum.Unstarted;
  const onClickCreateTask = () => {
    createTask({
      variables: {
        params: {
          title: title,
          body: body,
          limitOn: limitOn,
          state: state,
          image: image,
        },
      },
    });
    setTitle("");
    setBody("");
    setLimitOn("");
  };
  return (
    <>
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <div>
        <input
          value={title}
          placeholder="タイトルを入力"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          value={body}
          placeholder="内容を入力"
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
          type="file"
          onChange={(e) => {
            const files = e.currentTarget.files;
            if (!files || files?.length === 0) return;
            const file = files[0];
            setImage(file);
          }}
        />
      </div>
      <div>
        <button onClick={onClickCreateTask}>保存</button>
      </div>
    </>
  );
};

export default InputTask;
