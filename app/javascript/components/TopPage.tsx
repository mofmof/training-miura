import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import InputTask from "./InputTask";
import FlashMessage from "./FlashMessage";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <Link to={"/labels"}>ラベル一覧</Link>
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
