import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";
import { TaskStateLabel } from "./Enum";

const Tasks = () => {
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState(20);
  const [pageButtonState, setPageButtonState] = useState(true);
  const { data: { tasks } = {} } = useTasksQuery({
    variables: {
      title: title,
      first: first,
    },
  });
  const taskCount = tasks?.nodes?.length || 0;
  const onClickAddPage = () => {
    setFirst((first) => first + 20);
    if (first > taskCount) setPageButtonState(false);
  };

  const taskSearchTitle = () => {
    if (searchInput) setTitle(searchInput);
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
        value={searchInput}
        placeholder="タイトルを検索"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="bg-gray-300 border" onClick={taskSearchTitle}>
        検索
      </button>
      <div>
        <button className="bg-blue-200 border" onClick={resetTaskSearch}>
          全タスク表示
        </button>
      </div>
      <ul>
        {tasks?.nodes?.map((task) => (
          <li key={task?.id}>
            <Link to={`/tasks/${task?.id}`}>
              {TaskStateLabel(task?.state as any)}-{task?.title}-
              {task?.limitOn ? task.limitOn : "期限未登録"}
              {diffLimitOn(task?.limitOn)}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={onClickAddPage}>
        {pageButtonState && "もっとみる"}
      </button>
    </div>
  );
};

export default Tasks;
