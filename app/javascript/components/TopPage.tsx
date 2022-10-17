import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import InputTask from "./InputTask";
import CreateLabelForm from "./CreateLabelForm";
import FlashMessage from "./FlashMessage";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <Tasks />
      <InputTask />
      <CreateLabelForm />
      <div>
        <Link to={"/csv_export"}>タスクをダウンロード</Link>
      </div>
      <div>
        <Link to={"/logout"}>ログアウト</Link>
      </div>
    </>
  );
};

export default TopPage;
