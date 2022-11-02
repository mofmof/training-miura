import { TaskStateEnum } from "../graphql/generated";

export const useLimitOnDisplay = () => {
  const limitOnDisplay = (limitOn: any, state: TaskStateEnum | undefined) => {
    if (state == "finished") return;
    if (limitOn) {
      return `-${limitOn}`;
    } else {
      return "-期限未登録";
    }
  };
  return { limitOnDisplay };
};
