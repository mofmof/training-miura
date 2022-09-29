import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CsvExport = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/csv_export").then(() => {
      navigate("/", { state: { msg: "csvファイルを送信しました" } });
    });
  }, []);
  return <></>;
};

export default CsvExport;
