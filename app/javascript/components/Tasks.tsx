import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";
import { TaskStateLabel, TaskState } from "./Enum";
import { useLimitOnDisplay } from "../hooks/useLimitOnDisplay";
import { useLimitMessage } from "../hooks/useLimitMessage";

const Tasks = () => {
  const { limitOnDisplay } = useLimitOnDisplay();
  const { limitMessage } = useLimitMessage();
  const [searchTitle, setSearchTitle] = useState("");
  const [searchState, setSearchState] = useState("");
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const { data: { tasks } = {}, fetchMore } = useTasksQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      title: title,
      first: 20,
      state: state,
    },
  });
  const onClickAddPage = () => {
    if (tasks?.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: tasks.pageInfo.endCursor,
        },
      });
    }
  };

  const taskSearch = () => {
    if (searchTitle) setTitle(searchTitle);
    if (searchState) setState(searchState);
  };

  const resetTaskSearch = () => setTitle("");

  return (
    <div>
      <input
        className="bg-gray-50 border border-gray-300 my-3"
        value={searchTitle}
        placeholder="タイトルを検索"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <select
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      >
        <option value="">全て</option>
        <option value={TaskState.unstarted}>
          {TaskStateLabel(TaskState.unstarted)}
        </option>
        <option value={TaskState.started}>
          {TaskStateLabel(TaskState.started)}
        </option>
        <option value={TaskState.finished}>
          {TaskStateLabel(TaskState.finished)}
        </option>
      </select>
      <button className="bg-gray-300 border" onClick={taskSearch}>
        検索
      </button>
      <div>
        <button className="bg-blue-200 border" onClick={resetTaskSearch}>
          全タスク表示
        </button>
      </div>
      <ul>
        {tasks?.edges?.map((task) => (
          <li key={task?.node?.id}>
            <Link to={`/tasks/${task?.node?.id}`}>
              {TaskStateLabel(task?.node?.state)}-{task?.node?.title}
              {limitOnDisplay(task?.node?.limitOn, task?.node?.state)}
              {limitMessage(task?.node?.limitOn, task?.node?.state)}
            </Link>
          </li>
        ))}
      </ul>
      {tasks?.pageInfo.hasNextPage && (
        <button onClick={onClickAddPage}>もっとみる</button>
      )}
    </div>
  );
};

export default Tasks;
