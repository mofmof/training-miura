import { useState } from "react";
import {
  useUnshareUsersQuery,
  useCreateShareTaskMutation,
} from "../graphql/generated";
import { useNavigate, useParams } from "react-router-dom";

const UnshareUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return <></>;
  const [messages, setMessages] = useState("");
  const { data: { unshareUsers = [] } = {} } = useUnshareUsersQuery({
    variables: { id: id },
  });

  const [createShareTask] = useCreateShareTaskMutation({
    refetchQueries: ["shareUsers", "unshareUsers"],
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      navigate(`/tasks/${id}/users`);
    },
  });

  const shareSettingUpdate = (userId: string) => {
    createShareTask({
      variables: {
        userId: userId,
        taskId: id,
      },
    });
  };

  return (
    <div>
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <div className="mt-5">未共有ユーザー</div>
      <ul>
        {unshareUsers.map((user) => (
          <li key={user.id}>
            <div>
              {user.name}-
              <button onClick={() => shareSettingUpdate(user.id)}>追加</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnshareUsers;
