import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  // 削除はuseeffect内に記述　レンダリングが発生する度にログアウトが処理が走るのを防ぐ
  useEffect(() => {
    axios.delete("/logout", { withCredentials: true }).then(() => {
      navigate("/login", { state: { msg: "ログアウトしました" } });
    });
  }, []);
  return <></>;
};

export default Logout;
