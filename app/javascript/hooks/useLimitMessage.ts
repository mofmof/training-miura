import { TaskStateEnum } from "../graphql/generated";

export const useLimitMessage = () => {
  const formatDate = (date: Date): string => {
    const y: number = date.getFullYear();
    const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
    const d: string = ("00" + date.getDate()).slice(-2);
    return `${y + "-" + m + "-" + d}`;
  };

  const limitMessage = (limitOn: any, state: TaskStateEnum | undefined) => {
    if (limitOn == null) return;
    if (state == "finished") return;
    const limitOnParse: Date = new Date(limitOn);
    const today: Date = new Date(formatDate(new Date()));
    const diffDay: number = Math.floor(
      (limitOnParse.getTime() - today.getTime()) / 86400000
    );
    if (diffDay > 3 || diffDay == undefined) {
      return;
    } else if (diffDay < 1 && diffDay > -1) {
      return "-期限当日です";
    } else if (diffDay <= 3 && diffDay > 0) {
      return `-期限${diffDay}日前です`;
    } else {
      return "-期限が過ぎています";
    }
  };
  return { limitMessage };
};
