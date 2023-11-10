import { useSelector } from "react-redux";
import { detailsSelector } from "./context/documentSlice";
import { getCreatedPdf } from "./services/document";

export function DownloadPdfButton() {
  const details = useSelector(detailsSelector);
  return (
    <>
      <button
        onClick={() => {
          getCreatedPdf(details).then((result) => {
            console.log("Received", result);
            const linkSource = `data:application/pdf;base64,${result}`;
            const downloadLink = document.createElement("a");
            const fileName = "generated.pdf";
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();

          });
        }}
      >
        Download as pdf
      </button>
    </>
  );
}
