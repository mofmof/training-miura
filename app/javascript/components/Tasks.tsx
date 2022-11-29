import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";
import { TaskStateLabel, TaskState } from "./Enum";
import { useLimitOnDisplay } from "../hooks/useLimitOnDisplay";
import { useLimitMessage } from "../hooks/useLimitMessage";
import { CsvImport } from "./CsvImport";
import TaskDelete from "./TaskDelete";

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
    <>
      <div className="flex justify-center px-10 gap-4 mb-5">
        <input
          className="bg-gray-50 border border-gray-300 h-8 w-2/5 rounded"
          value={searchTitle}
          placeholder="タイトルを検索"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded"
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
        <button
          className="border border-green-300 hover:bg-green-300 rounded px-4"
          onClick={taskSearch}
        >
          検索
        </button>
        <button
          className="border border-blue-300 hover:bg-blue-300 rounded px-4"
          onClick={resetTaskSearch}
        >
          全表示
        </button>
      </div>
      <div className="text-center">
        <CsvImport />
      </div>
      <table className="mx-auto border-collapse">
        <thead>
          <tr className="border-b-2 border-sky-900">
            <th className="text-sky-900">タイトル</th>
            <th className="text-sky-900">状態</th>
            <th className="text-sky-900">期限</th>
            <th className="text-sky-900">アラート</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.edges?.map((task) => (
            <tr key={task?.node?.id} className="p-5 m-5 border-b-2">
              <td>
                <Link to={`/tasks/${task?.node?.id}`}>{task?.node?.title}</Link>
              </td>
              <td className="text-center px-2 py-2">
                {TaskStateLabel(task?.node?.state)}
              </td>
              <td className="text-center px-2">
                {limitOnDisplay(task?.node?.limitOn, task?.node?.state)}
              </td>
              <td className="px-2">
                {limitMessage(task?.node?.limitOn, task?.node?.state)}
              </td>
              <td>{task?.node?.id && <TaskDelete id={task?.node?.id} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center py-5">
        {tasks?.pageInfo.hasNextPage && (
          <button onClick={onClickAddPage}>もっとみる</button>
        )}
      </div>
    </>
  );
};

export default Tasks;
