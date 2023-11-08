import { Editor } from "./Editor";
import Preview from "./Preview";

export function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          display: "inline-block",
          height: "100%",
        }}
      >
        <div
          style={{
            maxHeight: "60%",
            margin: "auto",
          }}
        >
          <Editor />
        </div>
      </div>
      <div
        style={{
          width: "50%",
          display: "inline-block",
          height: "100%",
          flexGrow: "1",
        }}
      >
        <Preview/>
      </div>
    </div>
  );
}
