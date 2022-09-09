import { useState } from "react";
import { useSignUpMutation } from "../graphql/generated";

const SignUp = () => {
  const [signUp] = useSignUpMutation({
    refetchQueries: ["user"],
    onError: (error) => {
      console.log("失敗");
      console.log(error);
      return;
    },
    onCompleted: () => {
      console.log("成功");
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
        <button onClick={onClickCreateUser}>保存</button>
      </div>
    </>
  );
};

export default SignUp;
