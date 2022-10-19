import { useCreateLabelMutation } from "../graphql/generated";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateLabelForm = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState("");
  const [createLabel] = useCreateLabelMutation({
    refetchQueries: ["labels"],
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      setName("");
      navigate("/labels", { state: { msg: "ラベルが作成されました" } });
    },
  });
  const [name, setName] = useState("");
  const onClickCreateLabel = () => {
    createLabel({
      variables: {
        name: name,
      },
    });
  };
  return (
    <div className="mt-10 border-t-4 border-b-4">
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <input
        className="border border-black"
        value={name}
        placeholder="ラベル名を入力"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-green-700 px-4 py-1 rounded-full text-white"
        onClick={onClickCreateLabel}
      >
        登録
      </button>
    </div>
  );
};

export default CreateLabelForm;
