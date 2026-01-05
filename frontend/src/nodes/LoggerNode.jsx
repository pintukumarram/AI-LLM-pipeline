import BaseNode from "../components/BaseNode";

export default function LoggerNode() {
  return (
    <BaseNode title="Logger" inputs={["value"]}>
      <p>Logs value</p>
    </BaseNode>
  );
}
