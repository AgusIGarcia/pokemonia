import { useState } from "react";
import "./App.css";
import { defaultNodeList } from "./consts/default-node-list";
import { IMapNode } from "./interfaces/node.interface";
import MapNode from "./components/map-node.component";

function App() {
  const [nodes, setNodes] = useState<IMapNode[]>(defaultNodeList);

  return (
    <main className="app-container">
      <div className="map img-container">
        {nodes.map((mn) => (
          <MapNode mapNode={mn} />
        ))}
      </div>
      <div className="pokeboard img-container"></div>
    </main>
  );
}

export default App;
