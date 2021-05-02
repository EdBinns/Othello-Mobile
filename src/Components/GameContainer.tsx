import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ReversiBoard, ReversiCell, Coordinate, ScoresJson } from '../Models/index';
import GameBoard from './GameBoard';
import GameInfo from './gameInfo';
import { Link } from 'react-router-native'

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
            <View style={{ alignItems: 'center' }}>
                <Link to="/" style={styles.LinkButton}>
                    <Text style={styles.LinkText}>Volver al menu</Text>
                </Link>
            </View>
        </View>
    );
}

var styles = StyleSheet.create({
    LinkButton: {
        width: '60%',
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    LinkText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})