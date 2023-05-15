import "./App.css";
import MapNode from "./components/MapNode/map-node.component";
import PokeBoard from "./components/PokeBoard/poke-board.component";
import useGameState from "./hooks/useGameState.hook";

function App() {
  const { gameState, perceptionCycle, setPerceptionCycle, totalCycles, isWin } =
    useGameState();
  return (
    <main className="app-container">
      <div
        className="map img-container"
        style={{ opacity: isWin !== undefined ? 0.5 : 1 }}
      >
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
      {isWin === false && (
        <div className="game-result img-container game-result-lose" />
      )}
      {isWin === true && (
        <div className="game-result img-container game-result-win" />
      )}
    </main>
  );
}

export default App;
