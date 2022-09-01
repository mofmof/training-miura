import Tasks from "./Tasks";
import InputTask from "./InputTask";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const TopPage = () => {
  const location = useLocation();
  let flashMsg = location.state as { msg: string };
  const [message, setMessage] = useState(flashMsg.msg);
  if (flashMsg) {
    setInterval(() => {
      flashMsg.msg = "";
      setMessage(flashMsg.msg);
    }, 2000);
  }
  return (
    <>
      <p>{message}</p>
      <Tasks />
      <InputTask />
    </>
  );
};

export default TopPage;
