import { useLabelsQuery } from "../graphql/generated";

const Labels = () => {
  const { data: { labels = [] } = {} } = useLabelsQuery();

  return (
    <div className="mt-10">
      {labels.map((label) => (
        <div key={label.id}>{label.name}</div>
      ))}
    </div>
  );
};

export default Labels;
