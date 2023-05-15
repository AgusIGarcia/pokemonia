import "./App.css";
import MapNode from "./components/MapNode/map-node.component";
import PokeBoard from "./components/PokeBoard/poke-board.component";
import useGameState from "./hooks/useGameState.hook";

function App() {
  const { gameState, perceptionCycle, setPerceptionCycle, totalCycles } =
    useGameState();

  console.log(gameState);
  return (
    <main className="app-container">
      <div className="map img-container">
        {gameState.nodeMap.map((mn) => (
          <MapNode key={mn.name} mapNode={mn} />
        ))}
      </div>
      <PokeBoard
        pickachuEnergy={gameState.pikachuEnergy}
        selectedAction={gameState.selectedAction}
        specialPowers={gameState.specialPowers}
        currentPerceptionCycle={perceptionCycle}
        setCurrentPerceptionCycle={setPerceptionCycle}
        totalCycles={totalCycles}
      />
    </main>
  );
}

export default App;
