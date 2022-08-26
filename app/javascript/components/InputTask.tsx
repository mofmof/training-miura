import { useCreateTaskMutation } from "../graphql/generated";
import { useState } from "react";

const InputTask = () => {
  const [createTask] = useCreateTaskMutation({ refetchQueries: ["tasks"] });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <div>
        <input
          value={title}
          placeholder="タイトルを入力"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          value={body}
          placeholder="内容を入力"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            createTask({ variables: { params: { title: title, body: body } } });
            setTitle("");
            setBody("");
          }}
        >
          保存
        </button>
      </div>
    </>
  );
};

export default InputTask;
