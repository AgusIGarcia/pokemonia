import { IMapNode } from "./node.interface";

export enum PikachuAction {
  PELEAR = "pelear",
  NO_PELEAR = "no_pelear",
  MOVERSE = "moverse",
  RECOLECTAR_POKEBOLA = "recolectar_pokebola",
}

export interface ISpecialPower {
  canBeUsed: boolean;
  cooldown: number;
}

export interface IGameState {
  pikachuEnergy: number;
  selectedAction: PikachuAction;
  specialPowers: ISpecialPower[];
  nodeMap: IMapNode[];
}
