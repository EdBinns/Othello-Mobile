import React from 'react';
import GameContainer from './GameContainer';
import {View, ScrollView} from 'react-native';
import { startResponse, makeMove, gameStateBack, makeMoveAI } from '../Services/Services';
import { Coordinate, ReversiBoard, ReversiCell, ScoresJson } from '../Models';

var nivel = 0;

export function chooseLvl(lvl: number) {
    nivel = lvl;
}


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const GameViewAI = () => {

    const [gameState, setGameState] = React.useState<ReversiBoard>(startResponse.newBoard);
    const [turn, setTurn] = React.useState<ReversiCell>(ReversiCell.White);
    const [message, setMessage] = React.useState<string>("");
    const [scores, setScores] = React.useState<ScoresJson>({ whiteScore: 0, blackScore: 0 });

    const showCordenade = async (coord: Coordinate, actualBoard: ReversiBoard) => {
        if (turn == 1) {
            let playerturn = turn
            await makeMove(coord, actualBoard, playerturn)
            setGameState(gameStateBack.newBoard)
            let scoresList: ScoresJson = {
                whiteScore: gameStateBack.whiteScore,
                blackScore: gameStateBack.blackScore
            }
            setScores(scoresList);
            if (actualBoard !== gameStateBack.newBoard) {
                setTurn(gameStateBack.status)
                setMessage("Movimiento correcto.");
                if (gameStateBack.status === playerturn) {
                    setMessage("El enemigo no tiene movimientos, el turno es tuyo!")
                } else if (gameStateBack.status === 2) {
                    let ganador = (scoresList.whiteScore > scoresList.blackScore) ? "GANAN LAS BLANCAS!!" : "GANAN LAS NEGRAS!!"
                    if (scoresList.whiteScore === scoresList.blackScore) {
                        ganador = "ES UN EMPATE!!"
                    }
                    setMessage("JUEGO TERMINADO, " + ganador)
                }
            } else {
                setMessage("Movimiento invalido, intente de nuevo.");
            }
            await delay(1000)
            while (gameStateBack.status === 0) {
                await delay(500)
                if (actualBoard !== gameStateBack.newBoard) {
                    await makeMoveAI(gameStateBack.newBoard, nivel)
                    setGameState(gameStateBack.newBoard)
                    scoresList = {
                        whiteScore: gameStateBack.whiteScore,
                        blackScore: gameStateBack.blackScore
                    }
                    setScores(scoresList);
                    if (actualBoard !== gameStateBack.newBoard) {
                        setMessage("Movimiento correcto.");
                        setTurn(gameStateBack.status)
                    }
                }
            }
            if (gameStateBack.status === 2) {
                let ganador = (scoresList.whiteScore > scoresList.blackScore) ? "GANAN LAS BLANCAS!!" : "GANAN LAS NEGRAS!!"
                if (scoresList.whiteScore === scoresList.blackScore) {
                    ganador = "ES UN EMPATE!!"
                }
                setMessage("JUEGO TERMINADO, " + ganador)
            }
        }

    }
    return (
        <ScrollView>
            <View>
            <GameContainer gameState={gameState} turn={turn} message={message} scores={scores} onClickCell={showCordenade} />
            </View>
        </ScrollView>
    );
}

export default GameViewAI;