import { IMapNode } from "../../interfaces/node.interface";
import "./map-node.styles.css";

interface MapNodeProps {
  mapNode: IMapNode;
}

const MapNode = ({ mapNode }: MapNodeProps) => {
  const topPadding = 75;
  const leftPadding = 37;

  return (
    <div
      className={`map-node img-container ${getBackgroundImageClass(mapNode)}`}
      style={{
        top: mapNode.position.top - topPadding,
        left: mapNode.position.left - leftPadding,
      }}
    />
  );
};

const getBackgroundImageClass = (mapNode: IMapNode): string => {
  if (mapNode.hasEnemy && mapNode.hasPikachu) return "";
  if (mapNode.hasEnemy) return "map-node-with-enemy";
  if (mapNode.hasPikachu) return "map-node-with-pikachu";
  return "";
};

export default MapNode;
