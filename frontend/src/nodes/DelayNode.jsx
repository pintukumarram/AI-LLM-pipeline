import BaseNode from "../components/BaseNode";

export default function DelayNode() {
  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <p>Adds delay</p>
    </BaseNode>
  );
}
