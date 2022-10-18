import { Link } from "react-router-dom";
import { useLabelsQuery } from "../graphql/generated";
import CreateLabelForm from "./CreateLabelForm";
import FlashMessage from "./FlashMessage";

const Labels = () => {
  const { data: { labels = [] } = {} } = useLabelsQuery();

  return (
    <>
      <FlashMessage />
      <Link to={"/"}>トップページへ</Link>
      <CreateLabelForm />
      <div className="mt-10">
        {labels.map((label) => (
          <div key={label.id}>{label.name}</div>
        ))}
      </div>
    </>
  );
};

export default Labels;
