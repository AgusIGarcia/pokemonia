import {
  ISpecialPower,
  PikachuAction,
} from "../../interfaces/game-state.interface";
import "./poke-board.styles.css";

interface PokeBoardProps {
  pickachuEnergy: number;
  selectedAction: PikachuAction;
  specialPowers: ISpecialPower[];
  currentPerceptionCycle: number;
  setCurrentPerceptionCycle: React.Dispatch<React.SetStateAction<number>>;
  totalCycles: number;
}

const PokeBoard = (props: PokeBoardProps) => {
  const setPrevPerceptionCycle = () =>
    props.setCurrentPerceptionCycle((currentPC) =>
      currentPC === 1 ? currentPC : currentPC - 1
    );

  const setNextPerceptionCycle = () =>
    props.setCurrentPerceptionCycle((currentPC) =>
      currentPC === props.totalCycles ? currentPC : currentPC + 1
    );
    
  return (
    <div>
      <div className="pokeboard img-container" />
      <div className="pokeboard-perception-cycle-counter">
        {props.currentPerceptionCycle}
      </div>
      <div className="pokeboard-energy-counter">{props.pickachuEnergy}</div>
      <div className="pokeboard-action img-container" />
      <div className="pokeboard-left-arrow" onClick={setPrevPerceptionCycle} />
      <div className="pokeboard-right-arrow" onClick={setNextPerceptionCycle} />
    </div>
  );
};

export default PokeBoard;
