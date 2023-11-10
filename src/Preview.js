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
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function Preview() {
  const dispatch = useDispatch();
  const docs = [
    // {
    //   uri:
    //     "http://localhost:9000/uploads/ULRYB3ATJ56B/Screenshot%202021-04-28%20at%2014.04.23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20210507%2F%2Fs3%2Faws4_request&X-Amz-Date=20210507T142426Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=761187860be22801088ab8c212733f7f52af8f62d638f1341ee2ae4c18944251"
    //   // "http://localhost:9000/uploads/6QK5HJ84MAEM/RAS-118_CompanyCodes__SalesOffices.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20210507%2F%2Fs3%2Faws4_request&X-Amz-Date=20210507T110429Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=c20f9b77ffdc1a15910cea5acd3420b6583a1d4d38ce5716da30f1d0ea4315d5"
    //   // "https://res.cloudinary.com/cloudinaryforme/image/upload/v1618339571/workplace-1245776_1920_i9ayae.jpg"
    // },

    // {
    //   uri:
    //     "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"
    // },
    // { uri: require("./test-excelaki.xlsx") },
    // { uri: require("./test-excelaki.xlsx") },
    { uri: `${process.env.PUBLIC_URL}/assets/test.docx` },
    // { uri: require("../public/assets/test.docx") },
  ];
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
          <DownloadDocxButton />
          <DownloadPdfButton />
          <input
            type="number"
            onChange={(t) => {
              if (parseInt(t.target.value, 10)) {
                dispatch(updateTemplateId(parseInt(t.target.value, 10)));
              }
            }}
          />
        </div>
      )}

      {/* <div
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
       */}
      {/* <DocViewer
        documents={[
          // { uri: "http://127.0.0.1:3001/converter/remote/last" },
          {
            uri: `${process.env.PUBLIC_URL}/assets/test.docx`,
          },
        ]}
        pluginRenderers={[MSDocRenderer]}
      /> */}
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </>
  );
}
