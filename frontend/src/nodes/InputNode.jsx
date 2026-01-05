import BaseNode from "../components/BaseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input" outputs={["value"]}>
      <p>Provides input</p>
    </BaseNode>
  );
}
