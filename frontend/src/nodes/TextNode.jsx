import { useState } from "react";
import BaseNode from "../components/BaseNode";

/* Extract variables like {{name}} from text */
function extractVariables(text) {
  const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
  const matches = [...text.matchAll(regex)];

  return [...new Set(matches.map(match => match[1]))];
}

export default function TextNode() {
  const [text, setText] = useState("");

  const variables = extractVariables(text);

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={["text"]}
    >
      <textarea
     value={text}
  onChange={(e) => setText(e.target.value)}
  placeholder="Type text here..."
  rows={Math.max(2, text.split("\n").length)}
  className="text-area"
        style={{
          width: "100%",
          resize: "none",
          padding: "6px",
          fontSize: "13px"
        }}
      />
    </BaseNode>
  );
}
