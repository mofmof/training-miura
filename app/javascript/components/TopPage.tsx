import Tasks from "./Tasks";
import InputTask from "./InputTask";
import FlashMessage from "./FlashMessage";

const TopPage = () => {
  return (
    <>
      <FlashMessage />
      <Tasks />
      <InputTask />
    </>
  );
};

export default TopPage;
