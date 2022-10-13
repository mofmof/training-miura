import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";
import { TaskStateLabel, TaskState } from "./Enum";

const Tasks = () => {
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

  const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
  };

  const diffLimitOn = (limitOn: any) => {
    if (limitOn == null) return;
    const limitOnParse: Date = new Date(limitOn);
    const today: Date = new Date(formatDate(new Date()));
    const diffDay: number = Math.floor(
      (limitOnParse.getTime() - today.getTime()) / 86400000
    );
    const limitMessage = () => {
      if (diffDay > 3 || diffDay == undefined) {
        return;
      } else if (diffDay < 1 && diffDay > -1) {
        return "-期限当日です";
      } else if (diffDay <= 3 && diffDay > 0) {
        return `-期限${diffDay}日前です`;
      } else {
        return "-期限が過ぎています";
      }
    };

    return limitMessage();
  };

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
              {TaskStateLabel(task?.node?.state as any)}-{task?.node?.title}-
              {task?.node?.limitOn ? task?.node?.limitOn : "期限未登録"}
              {diffLimitOn(task?.node?.limitOn)}
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
