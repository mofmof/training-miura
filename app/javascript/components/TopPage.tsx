import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import FlashMessage from "./FlashMessage";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <div className="flex justify-between shadow-lg border-b-0 border-gray-500 mb-5">
        <div className="text-3xl font-bold my-2 ml-2">
          <p>ToDoリスト</p>
        </div>
        <div className="flex flex-row">
          <Link className="px-2 hover:bg-gray-200 pt-5" to={"/tasks/new"}>
            タスク作成
          </Link>
          <Link className="px-2 hover:bg-gray-200 pt-5" to={"/labels"}>
            ラベル
          </Link>
          <Link className="px-2 hover:bg-gray-200 pt-5" to={"/csv_export"}>
            エクスポート
          </Link>
          <Link className="px-2 hover:bg-gray-200 pt-5" to={"/sharetasks"}>
            共有されたタスク一覧
          </Link>
          <Link className="px-2 hover:bg-gray-200 pt-5" to={"/logout"}>
            ログアウト
          </Link>
        </div>
      </div>
      <Tasks />
    </>
  );
};

export default TopPage;
