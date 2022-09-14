export const TaskState = {
  unstarted: "unstarted",
  started: "started",
  finished: "finished",
} as const;

export type TaskState = typeof TaskState[keyof typeof TaskState];

export const TaskStateLabel = (name: TaskState): string => {
  switch (name) {
    case "unstarted":
      return "未着手";
    case "started":
      return "着手中";
    case "finished":
      return "完了";
  }
};
