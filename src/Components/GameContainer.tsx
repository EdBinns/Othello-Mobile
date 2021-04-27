import React from 'react';
import { View } from 'react-native';
import { ReversiBoard, ReversiCell, Coordinate, ScoresJson } from '../Models/index';
import GameBoard from './GameBoard';
import GameInfo from './gameInfo';

type Props = {
    gameState: ReversiBoard,
    turn: ReversiCell,
    message: string,
    scores: ScoresJson,
    onClickCell: (coord: Coordinate, gameState: ReversiBoard) => void
}

export default function GameContainer({ gameState, onClickCell, turn, message, scores }: Props) {
    return (
        <View>
            <GameBoard gameState={gameState} isGameOver={false} onClickCell={onClickCell} />
            <GameInfo scores={scores} turn={turn} message={message} />

        </View>
    );
}