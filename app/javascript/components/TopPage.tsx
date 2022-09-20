import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import InputTask from "./InputTask";
import FlashMessage from "./FlashMessage";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <Tasks />
      <InputTask />
      <Link to={"/logout"}>ログアウト</Link>
    </>
  );
};

export default TopPage;
