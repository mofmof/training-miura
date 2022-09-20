import { useTaskQuery } from "../graphql/generated";
import { useParams } from "react-router-dom";
import TaskUpdate from "./TaskUpdate";

const TaskUpdateParent = () => {
  const { id } = useParams();
  const { data: { task } = {} } = useTaskQuery({
    variables: { id: id as string },
  });

  if (!task) return <></>;

  return <TaskUpdate task={task} />;
};

export default TaskUpdateParent;
