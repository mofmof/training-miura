import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";
import { TaskStateLabel } from "./Enum";

const Tasks = () => {
  const { data: { tasks = [] } = {} } = useTasksQuery();

  const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
  };

  const diffLimitAt = (limitOn: any) => {
    if (!limitOn) return;
    const LimitAtParse: Date = new Date(limitOn);
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
              {TaskStateLabel(task.state as any)}-{task.title}-{task.limitAt}
              {diffLimitAt(task.limitAt)}
=======
              {task.title}-{task.limitOn}
              {diffLimitAt(task.limitOn)}
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
