interface NodePosition{
    top: number;
    left: number;
}

export interface IMapNode{
    name: string;
    position: NodePosition;
    energy: number;
    hasPikachu?: boolean;
    hasEnemy?: boolean;
    hasPokeball?: boolean;
    hasBoss?: boolean;
}