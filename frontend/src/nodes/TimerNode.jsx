import BaseNode from "../components/BaseNode";

export default function TimerNode() {
  return (
    <BaseNode title="Timer" outputs={["time"]}>
      <p>Emits time</p>
    </BaseNode>
  );
}
