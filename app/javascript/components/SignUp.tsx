import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignUpMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./FlashMessage";

const SignUp = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState("");

  const [signUp] = useSignUpMutation({
    refetchQueries: ["user"],
    onError: (e) => {
      setMessages(e.message);
      return;
    },
    onCompleted: () => {
      navigate("/login", { state: { msg: "ユーザー作成されました" } });
    },
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const onClickCreateUser = () => {
    signUp({
      variables: {
        params: {
          name: name,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation,
        },
      },
    });
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <>
      <FlashMessage />
      <p style={{ whiteSpace: "pre-line" }}>{messages}</p>
      <div>
        <input
          value={name}
          placeholder="名前"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
          name="password"
          value={password}
          placeholder="パスワード"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          name="password"
          value={passwordConfirmation}
          placeholder="パスワード再入力"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onClickCreateUser}>登録</button>
      </div>
      <Link to={"/login"}>ログイン</Link>
    </>
  );
};

export default SignUp;
