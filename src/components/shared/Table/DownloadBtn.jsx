import { DownloadIcon } from "./icons/icons";
import * as XLSX from "xlsx/xlsx.mjs";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="download-btn text-gray-200 bg-blue-700 px-2 rounded "
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
        <div className="flex flex-row">
      <span className="pt-1 mr-2"><DownloadIcon /></span>   Download
        </div>
      
      
    </button>
  );
};

export default DownloadBtn;