import axios from "axios";
import { useState, useEffect } from "react";
import { ApiTaskLabels } from "./ApiTaskLabels";

type TaskType = {
  id: string;
  title: string;
  body: number;
  limit_on: string;
  state: string;
};

export const ApiTasks = () => {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  useEffect(() => {
    axios.get<Array<TaskType>>("/api/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.id}-{task.title}-{task.limit_on}-{task.state}
          <div>
            <ApiTaskLabels id={task.id} />
          </div>
        </div>
      ))}
    </>
  );
};
