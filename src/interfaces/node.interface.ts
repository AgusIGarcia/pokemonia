interface NodePosition{
    top: number;
    left: number;
}

export interface IMapNode{
    name: string;
    position: NodePosition;
    hasPikachu?: boolean;
    hasEnemy?: boolean;
}