import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskShow from "./components/TaskShow";
import TopPage from "./components/TopPage";
import TaskUpdateParent from "./components/TaskUpdateParent";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="tasks/:id" element={<TaskShow />} />
          <Route path="tasks/:id/edit" element={<TaskUpdateParent />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
