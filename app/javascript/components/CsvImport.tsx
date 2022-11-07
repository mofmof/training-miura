import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CsvImport = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const createFormData = () => {
    const formData = new FormData();
    formData.append("file", file);
    return formData;
  };
  const handleFileImportChange = (e: any) => {
    if (e.target.files) setFile(e.target.files[0]);
  };
  const onClickCsvImport = async () => {
    const url = "/csv_import";
    const data = createFormData();
    axios.post(url, data).then(() => {
      navigate("/", { state: { msg: "csvファイルを送信しました" } });
    });
    // refetchqueryでtasksのキャッシュ更新したい
  };
  return (
    <>
      <input type="file" onChange={handleFileImportChange} />
      <button onClick={onClickCsvImport}>CSVインポート</button>
    </>
  );
};
