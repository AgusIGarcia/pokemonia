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
      <div
        className="pokeboard-perception-cycle-counter"
        style={{ left: props.currentPerceptionCycle < 10 ? 184 : 178 }}
      >
        {props.currentPerceptionCycle}
      </div>
      <div
        className="pokeboard-energy-counter"
        style={{ left: props.pickachuEnergy < 10 ? 252 : 247 }}
      >
        {props.pickachuEnergy}
      </div>
      <div
        className={`pokeboard-action img-container ${getClassNameAction(
          props.selectedAction
        )}`}
      />
      <div className="pokeboard-left-arrow" onClick={setPrevPerceptionCycle} />
      <div className="pokeboard-right-arrow" onClick={setNextPerceptionCycle} />

      {props.specialPowers[0].canBeUsed && (
        <div className="pokeboard-special-power pokeboard-special-power-1 img-container">
          <p className="pokeboard-special-power-cooldown">
            {props.specialPowers[0].cooldown}
          </p>
        </div>
      )}
      {props.specialPowers[1].canBeUsed && (
        <div className="pokeboard-special-power pokeboard-special-power-2 img-container">
          <p className="pokeboard-special-power-cooldown">
            {props.specialPowers[1].cooldown}
          </p>
        </div>
      )}
      {props.specialPowers[2].canBeUsed && (
        <div className="pokeboard-special-power pokeboard-special-power-3 img-container">
          <p className="pokeboard-special-power-cooldown">
            {props.specialPowers[2].cooldown}
          </p>
        </div>
      )}
    </div>
  );
};

const getClassNameAction = (action: PikachuAction) => {
  switch (action) {
    case PikachuAction.PELEAR:
      return "pokeboard-action-pelear";
    case PikachuAction.NO_PELEAR:
      return "pokeboard-action-no-pelear";
    case PikachuAction.MOVERSE:
      return "pokeboard-action-moverse";
    case PikachuAction.RECOLECTAR_POKEBOLA:
      return "pokeboard-action-recolectar-pokebola";
  }
};

export default PokeBoard;
