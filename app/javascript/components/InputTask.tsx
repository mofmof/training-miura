import { useCreateTaskMutation } from "../graphql/generated";
import { useState } from "react";

const InputTask = () => {
  const [createTask] = useCreateTaskMutation({ refetchQueries: ["tasks"] });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleVlidateBoolean, setTitleVlidateBoolean] = useState(false);
  const titleVlidateMessage = "タイトルが未入力です";
  const titleValidate = () => {
    if (title === "") {
      setTitleVlidateBoolean(true);
    } else {
      createTask({ variables: { params: { title: title, body: body } } });
      setTitle("");
      setBody("");
    }
  };
  return (
    <>
      <div>
        <p>{titleVlidateBoolean && titleVlidateMessage}</p>
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
        <button onClick={titleValidate}>保存</button>
      </div>
    </>
  );
};

export default InputTask;
