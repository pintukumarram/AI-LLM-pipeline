export function submitPipeline() {
  const nodes = [
    { id: "1", type: "input" },
    { id: "2", type: "text" },
    { id: "3", type: "output" },
  ];

  const edges = [
    { from: "1", to: "2" },
    { from: "2", to: "3" },
  ];

  fetch("http://localhost:8000/pipelines/parse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nodes, edges }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(
        `Pipeline Summary:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
      );
    })
    .catch(() => {
      alert("Backend not reachable");
    });
}
