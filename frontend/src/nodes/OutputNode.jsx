import BaseNode from "../components/BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output" inputs={["value"]}>
      <p>Final result</p>
    </BaseNode>
  );
}
