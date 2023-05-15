import { defaultNodeList } from "../consts/default-node-list";
import {
  IGameState,
  ISpecialPower,
  PikachuAction,
} from "../interfaces/game-state.interface";
import { IMapNode } from "../interfaces/node.interface";
import { IOriginalGame } from "../interfaces/origin-data.interface";

export const mapOriginalGameToGameState = (
  originalGame: IOriginalGame[]
): IGameState[] => {
  return originalGame.map((og) => ({
    pikachuEnergy: og.energia,
    selectedAction: strToPikachuAction(og.accion),
    specialPowers: getSpecialPowers(
      og.poder_especial_tiempo,
      og.poder_especial_activos
    ),
    nodeMap: graphToMapNodeArray(og.posicion ,og.grafo),
  }));
};

const strToPikachuAction = (strAction: string): PikachuAction => {
  switch (strAction.toLowerCase()) {
    case "pelear":
      return PikachuAction.PELEAR;
    case "no_pelear":
      return PikachuAction.NO_PELEAR;
    case "moverse":
      return PikachuAction.MOVERSE;
    case "recolectar_pokebola":
      return PikachuAction.RECOLECTAR_POKEBOLA;
  }
  return PikachuAction.MOVERSE;
};

const getSpecialPowers = (
  cooldowns: number[],
  areEnabled: boolean[]
): ISpecialPower[] => {
  return cooldowns.map((c, index) => ({
    cooldown: c,
    canBeUsed: areEnabled[index],
  }));
};

const graphToMapNodeArray = (
  pikachuCurrentNode: string,
  graphNodeList: any[]
): IMapNode[] => {
  return graphNodeList.map((gn) => {
    const nodeName = gn[0];
    return {
      name: nodeName,
      energy: gn[1],
      hasEnemy: gn[2].toLowerCase() === "enemigo",
      hasPokeball: gn[2].toLowerCase() === "pokebola",
      hasPikachu: nodeName === pikachuCurrentNode,
      position: defaultNodeList.find((defNode) => defNode.name === gn[0])
        ?.position || { left: 0, top: 0 },
    };
  });
};
