import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

type LoginUserSession = {
  user: {
    email: string;
    password: string;
  };
};

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUserSession = async ({
    user: { email, password },
  }: LoginUserSession): Promise<any> => {
    const response = await axios.post(
      "/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
    axios.defaults.headers.common["X-CSRF-Token"] =
      response.headers["x-csrf-token"];
    return response.data;
  };

  const onSubmit = () => {
    loginUserSession({
      user: {
        email: email,
        password: password,
      },
    }).then((data) => {
      if (data.user) {
        return navigate("/", { state: { msg: "ログイン成功" } });
      } else {
        return navigate("/login", { state: { msg: "ログイン失敗" } });
      }
    });
  };

  return (
    <>
      <FlashMessage />
      <div>
        <input
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          name="passaword"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onSubmit}>ログイン</button>
      </div>
      <Link to={"/signup"}>新規登録</Link>
    </>
  );
};

export default Login;
