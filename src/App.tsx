import { useState } from "react";
import "./App.css";
import { defaultNodeList } from "./consts/default-node-list";
import { MapNode } from "./interfaces/node.interface";

function App() {
  const [nodes, setNodes] = useState<MapNode[]>(defaultNodeList);
  const divSize = 50;

  return (
    <main className="app-container">
      <div
        className="map"
        onClick={(e) => console.log("X ", e.screenX, "Y ", e.screenY)}
      >
        {nodes.map((n) => (
          <div
            key={n.name}
            className="map-node"
            style={{
              top: n.position.top - divSize / 2,
              left: n.position.left - divSize / 2,
            }}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
