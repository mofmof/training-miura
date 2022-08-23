import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const TaskShow = () => {
  let { id } = useParams();

  return (
    <div>
      <p> {id}</p>
    </div>
  );
}

export default TaskShow;
