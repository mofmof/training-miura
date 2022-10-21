import { useDeleteLabelMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

const LabelDelete: React.FC<Props> = (props) => {
  const { id } = props;
  const navigate = useNavigate();
  const [deleteLabel] = useDeleteLabelMutation({
    refetchQueries: ["labels"],
    onError: () => {
      navigate("/labels", { state: { msg: "削除失敗" } });
    },
    onCompleted: () => {
      navigate("/labels");
    },
  });

  const onClickLabelDelete = () => {
    deleteLabel({ variables: { id: id } });
  };

  return (
    <button
      className="ml-3 bg-red-700 hover:bg-red-600 text-white rounded px-2 py-1"
      onClick={onClickLabelDelete}
    >
      削除
    </button>
  );
};

export default LabelDelete;
