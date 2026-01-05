from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- DAG CHECK ----------
def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        graph[edge["from"]].append(edge["to"])

    visited = set()
    stack = set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        stack.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        stack.remove(node)
        return True

    for node in graph:
        if not dfs(node):
            return False

    return True
# --------------------------------

@app.post("/pipelines/parse")
def parse_pipeline(data: dict):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges)
    }
