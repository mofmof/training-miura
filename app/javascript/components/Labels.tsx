import { Link } from "react-router-dom";
import { useLabelsQuery } from "../graphql/generated";
import CreateLabelForm from "./CreateLabelForm";
import FlashMessage from "./FlashMessage";
import LabelDelete from "./LabelDelete";

const Labels = () => {
  const { data: { labels = [] } = {} } = useLabelsQuery();

  return (
    <>
      <FlashMessage />
      <Link to={"/"}>トップページへ</Link>
      <CreateLabelForm />
      <div className="mt-10">
        {labels.map((label) => (
          <div key={label.id}>
            {label.name}
            <LabelDelete id={label.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Labels;
