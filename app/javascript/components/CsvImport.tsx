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
  };
  return (
    <div className="py-4">
      <input
        type="file"
        className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        onChange={handleFileImportChange}
      />
      <button
        className="mx-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center"
        onClick={onClickCsvImport}
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>CSV Import</span>
      </button>
    </div>
  );
};
