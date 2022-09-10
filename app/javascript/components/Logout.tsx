import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  axios.delete("/logout", { withCredentials: true }).then(() => {
    navigate("/login", { state: { msg: "ログアウトしました" } });
  });
  return <></>;
};

export default Logout;
