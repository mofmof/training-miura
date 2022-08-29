import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskShow from "./components/TaskShow";
import TopPage from "./components/TopPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopPage />}></Route>
          <Route path="tasks/:id" element={<TaskShow />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
