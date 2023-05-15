import { IMapNode } from "../../interfaces/node.interface";
import "./map-node.styles.css";

interface MapNodeProps {
  mapNode: IMapNode;
}

const MapNode = ({ mapNode }: MapNodeProps) => {
  const topPadding = 75;
  const leftPadding = 37;

  const backgroundColor = mapNode.hasPokeball ? "#44FD67" : "#FF1E1E";
  const textColor = mapNode.hasPokeball ? "black" : "white";
  const printEnergy =
    mapNode.hasEnemy ||
    mapNode.hasPokeball ||
    (mapNode.hasBoss && !mapNode.hasPikachu);

  return (
    <div
      className={`map-node img-container ${getBackgroundImageClass(mapNode)}`}
      style={{
        top: mapNode.position.top - topPadding,
        left: mapNode.position.left - leftPadding,
      }}
    >
      {printEnergy && (
        <div
          className="map-node-energy"
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          {mapNode.energy}
        </div>
      )}
    </div>
  );
};

const getBackgroundImageClass = (mapNode: IMapNode): string => {
  if (mapNode.hasEnemy && mapNode.hasPikachu)
    return "map-node-with-pikachu-and-gengar";
  if (mapNode.hasPokeball) return "map-node-with-pokeball";
  if (mapNode.hasEnemy) return "map-node-with-enemy";
  if (mapNode.hasPikachu) return "map-node-with-pikachu";
  if (mapNode.hasBoss) return "map-node-with-boss";
  return "";
};

export default MapNode;
