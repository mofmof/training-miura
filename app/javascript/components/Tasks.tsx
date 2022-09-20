import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";

const Tasks = () => {
  const { data: { tasks = [] } = {} } = useTasksQuery();

  const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
  };

  const diffLimitAt = (limitAt: any) => {
    if (!limitAt) return;
    const LimitAtParse: Date = new Date(limitAt);
    const today: Date = new Date(formatDate(new Date()));
    const diffDay: number = Math.floor(
      (LimitAtParse.getTime() - today.getTime()) / 86400000
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
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
<<<<<<< HEAD
              {task.title}-{task.limitAt}
              {diffLimitAt(task.limitAt)}
=======
              {task.title}-{task.limitOn}
>>>>>>> 98bff2b84c98e68ba5ccc8474a7ec99097da7d88
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
