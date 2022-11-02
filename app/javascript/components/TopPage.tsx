import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import InputTask from "./InputTask";
import FlashMessage from "./FlashMessage";
import ShareTasks from "./ShareTasks";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <div>
        <Link to={"/labels"}>ラベル一覧</Link>
      </div>
      <Link to={"/sharetasks"}>共有されたタスク一覧</Link>
      <Tasks />
      <InputTask />
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
