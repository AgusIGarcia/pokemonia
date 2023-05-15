import { useState } from "react";
import originalGame from "../../public/game.json";
import { IGameState } from "../interfaces/game-state.interface";
import { mapOriginalGameToGameState } from "../utils/converters";

interface IUseGame {
  perceptionCycle: number;
  setPerceptionCycle: React.Dispatch<React.SetStateAction<number>>;
  gameState: IGameState;
  totalCycles: number;
}

const useGameState = (): IUseGame => {
  const [perceptionCycle, setPerceptionCycle] = useState<number>(1);
  const gameState = mapOriginalGameToGameState(originalGame);

  return {
    perceptionCycle,
    setPerceptionCycle,
    gameState: gameState[perceptionCycle - 1],
    totalCycles: gameState.length,
  };
};

export default useGameState;
