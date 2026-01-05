import "../styles/node.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className="node">
      <div className="node-header">{title}</div>
<div className="node-header">
  <span className="node-icon">⚙</span>
  {title}
</div>
      <div className="node-content">
        {/* Inputs */}
        <div className="node-inputs">
          {inputs.map((input, i) => (
            <div key={i} className="handle input-handle">
              {input}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="node-body">
          {children}
        </div>

        {/* Outputs */}
        <div className="node-outputs">
          {outputs.map((output, i) => (
            <div key={i} className="handle output-handle">
              {output}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
