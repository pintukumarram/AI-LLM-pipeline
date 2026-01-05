# VectorShift Frontend Technical Assessment

## Overview
This project is a simple pipeline editor built as part of the VectorShift frontend assessment.  
Users can create nodes, connect them logically, and submit the pipeline for validation.

---

## Frontend Implementation

### Node Abstraction
A reusable `BaseNode` component was created to avoid duplicated UI code.  
All nodes (Input, Output, Text, Delay, Logger, Timer) reuse this component and only configure their inputs, outputs, and content.

### Text Node Logic
The Text node supports:
- Auto‑resizing textarea
- Dynamic variable detection using `{{variable}}` syntax
- Automatic creation of input handles based on detected variables

### Submit Pipeline
A Submit button sends the pipeline data (nodes and edges) to the backend and displays the response.

---

## Backend Implementation

A FastAPI backend exposes a `/pipelines/parse` endpoint that:
- Counts total nodes
- Counts total edges
- Validates whether the pipeline is a Directed Acyclic Graph (DAG)

Cycle detection is implemented using a simple DFS traversal.

---

## How to Run

### Frontend
```bash
cd frontend
npm install
npm start
