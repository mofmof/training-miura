import { useState } from "react";
import {
  useShareUsersQuery,
  useDeleteShareTaskMutation,
} from "../graphql/generated";
import { useNavigate, useParams } from "react-router-dom";

const ShareUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return <></>;
  const [messages, setMessages] = useState("");
  const { data: { shareUsers = [] } = {} } = useShareUsersQuery({
    variables: { id: id },
  });

  const [deleteShareTask] = useDeleteShareTaskMutation({
    refetchQueries: ["shareUsers", "unshareUsers"],
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      navigate(`/tasks/${id}/users`);
    },
  });

  const unshareSettingUpdate = (userId: string) => {
    deleteShareTask({
      variables: {
        userId: userId,
        taskId: id,
      },
    });
  };

  return (
    <div>
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <div>共有ユーザー</div>
      <ul>
        {shareUsers.map((user) => (
          <li key={user.id}>
            <div>
              {user.name}-
              <button onClick={() => unshareSettingUpdate(user.id)}>
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShareUsers;
