import "./poke-board.styles.css";

const PokeBoard = () => {
  return (
    <div>
      <div className="pokeboard img-container" />
      <div className="pokeboard-energy-counter">15</div>
      <div className="pokeboard-action img-container"/>
    </div>
  );
};

export default PokeBoard;
