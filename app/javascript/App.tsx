import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskShow from "./components/TaskShow";
import TopPage from "./components/TopPage";
import TaskUpdateParent from "./components/TaskUpdateParent";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Labels from "./components/Labels";
import CsvExport from "./components/CsvExport";
import ParentShareTaskUsers from "./components/ParentShareTaskUsers";
import Users from "./components/Admin/Users";
import ShareTasks from "./components/ShareTasks";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="tasks/:id" element={<TaskShow />} />
          <Route path="sharetasks" element={<ShareTasks />} />
          <Route path="tasks/:id/edit" element={<TaskUpdateParent />} />
          <Route path="tasks/:id/users" element={<ParentShareTaskUsers />} />
          <Route path="labels" element={<Labels />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="csv_export" element={<CsvExport />} />

          {/* 管理者のみ */}
          <Route path="users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
