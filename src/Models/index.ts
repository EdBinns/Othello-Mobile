  
export enum ReversiCell {
    Black,
    White,
    Empty,
}

export type ReversiBoard = ReversiCell[][]

export type Coordinate = {
    i: number,
    j: number
}

export type ScoresJson = {
    whiteScore: number,
    blackScore: number
}

export type Direction = (coord: Coordinate) => Coordinate

export enum AIKind {
    Human,
    PickFirst,
    MinMaxTree,
    OnePly,
}

export enum HeuristicKind {
    PuckPairity
}

export type InfoMessage = {
    timestamp: Date,
    message: string
}