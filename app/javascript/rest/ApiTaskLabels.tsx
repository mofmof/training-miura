import axios from "axios";
import { useState, FC } from "react";

type LabelType = {
  id: string;
  name: string;
};

type Props = {
  id: string;
};

export const ApiTaskLabels: FC<Props> = (props) => {
  const { id } = props;
  const [labels, setLabels] = useState<Array<LabelType>>([]);
  axios.get<Array<LabelType>>(`/api/tasks/${id}/labels`).then((res) => {
    setLabels(res.data);
  });

  return (
    <>
      {labels?.map((label) => (
        <p key={label.id}>{label.name}</p>
      ))}
    </>
  );
};
