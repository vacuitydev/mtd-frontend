import { useSelector } from "react-redux";
import { detailsSelector } from "./context/documentSlice";
import { getCreatedDocx } from "./services/document";

export function DownloadDocxButton() {
  const details = useSelector(detailsSelector);
  return (
    <>
      <button
        onClick={() => {
          getCreatedDocx(details).then((result) => {
            console.log("Received", result);
            var bytes = new Uint8Array(result.data);

            var blob = new Blob([bytes], { type: "application/docx" }); 
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "generated.docx";
            link.click();
          });
        }}
      >
        Download as docx
      </button>
    </>
  );
}
