import axios from "axios";
import { useState, FC } from "react";

type TaskType = {
  id: string;
  title: string;
  body: number;
  limit_on: string;
  state: string;
};

export const ApiTasks = () => {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  axios.get<Array<TaskType>>("/api/tasks").then((res) => {
    setTasks(res.data);
  });

  return (
    <div>
      {tasks.map((task) => (
        <p>
          {task.id}-{task.title}-{task.limit_on}-{task.state}
        </p>
      ))}
    </div>
  );
};
