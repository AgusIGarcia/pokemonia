import { defaultNodeList } from "../consts/default-node-list";
import { IGraphNode } from "../interfaces/graph-node.interface";
import { IMapNode } from "../interfaces/node.interface";

export const graphToMapNodeArray = (
  graphNodeList: IGraphNode[]
): IMapNode[] => {
  return graphNodeList.map((gn) => {
    return {
      name: gn.name,
      energy: gn.energy,
      hasEnemy: gn.entity.toLowerCase() === "enemigo",
      hasPokeball: gn.energy > 0 && gn.entity.toLowerCase() !== "enemigo",
      position: defaultNodeList.find((defNode) => defNode.name === gn.name)
        ?.position || { left: 0, top: 0 },
    };
  });
};
