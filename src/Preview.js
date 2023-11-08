import { useDispatch, useSelector } from "react-redux";
import {
  getPdfs,
  isLoadingPdfSelector,
  pdfDataSelector,
  updateTemplateId,
} from "./context/documentSlice";
import { PdfViewer } from "./PdfViewer";
import { getCreatedDocx } from "./services/document";
import { DownloadDocxButton } from "./DownloadDocxButton";
import { DownloadPdfButton } from "./DownloadPdfButton";

export default function Preview() {
  const dispatch = useDispatch();
  const pdfData = useSelector(pdfDataSelector);
  const isLoading = useSelector(isLoadingPdfSelector);
  return (
    <>
      {isLoading ? (
        <>Loading last preview</>
      ) : (
        <div>
          <button
            disabled={isLoading}
            onClick={() => {
              console.log("Getting pdfs");
              dispatch(getPdfs());
            }}
          >
            Refresh
          </button>
          <DownloadDocxButton/>
          <DownloadPdfButton/>
          <input type="number" onChange={(t)=>{
            if ( parseInt(t.target.value,10)){
              dispatch(updateTemplateId(parseInt(t.target.value,10)))

            }
          }}/>
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {pdfData && pdfData.created ? (
          <PdfViewer pdfData={pdfData.created} />
        ) : (
          <>This is where the infant document preview will go</>
        )}
      </div>
    </>
  );
}
