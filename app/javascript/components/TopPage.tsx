import Tasks from "./Tasks";
import InputTask from "./InputTask";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TopPage = () => {
  const location = useLocation();
  let flashMsg = location.state as { msg: string };
  const navigate = useNavigate();

  useEffect(() => {
    if (!flashMsg) return;
    setInterval(() => {
      navigate("/", {});
    }, 2000);
  }, [flashMsg]);

  return (
    <>
      <p>{flashMsg?.msg}</p>
      <Tasks />
      <InputTask />
    </>
  );
};

export default TopPage;
