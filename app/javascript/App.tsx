import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskShow from "./components/TaskShow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="tasks/:id" element={<TaskShow />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
