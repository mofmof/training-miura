import { useCreateTaskMutation } from "../graphql/generated";
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
  const onClickCreateTask = () => {
    createTask({ variables: { params: { title: title, body: body } } });
    setTitle("");
    setBody("");
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
        <button onClick={onClickCreateTask}>保存</button>
      </div>
    </>
  );
};

export default InputTask;
