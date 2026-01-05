import InputNode from "./nodes/InputNode";
import TextNode from "./nodes/TextNode";
import DelayNode from "./nodes/DelayNode";
import LoggerNode from "./nodes/LoggerNode";
import OutputNode from "./nodes/OutputNode";
import { submitPipeline } from "./submit";
import "./index.css";

function toggleTheme() {
  const current = document.body.dataset.theme;
  document.body.dataset.theme = current === "dark" ? "light" : "dark";
}

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <h2>Pipeline Builder</h2>
        <div className="header-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            Toggle Theme
          </button>
          <button className="submit-btn" onClick={submitPipeline}>
            Submit Pipeline
          </button>
        </div>
      </header>

      {/* Canvas */}
      <div className="canvas">
        <InputNode />
        <TextNode />
        <DelayNode />
        <LoggerNode />
        <OutputNode />
      </div>
    </div>
  );
}

export default App;
