import GameContainer from './GameContainer';
import React from 'react';
import { startResponse, gameStateBack, gameId, makeMoveMultiplayer, GetActualGameService, createdMatch } from '../Services/Services';
import { Coordinate, ReversiBoard, ReversiCell, ScoresJson } from '../Models';
import { ScrollView, View, Text, Button, Clipboard, TouchableOpacity } from 'react-native'


export default function MpView() {
    const [gameState, setGameState] = React.useState<ReversiBoard>(startResponse.newBoard);
    const [turn, setTurn] = React.useState<ReversiCell>(ReversiCell.White);
    const [message, setMessage] = React.useState<string>("");
    const [scores, setScores] = React.useState<ScoresJson>({ whiteScore: 0, blackScore: 0 });

    var code = gameId;
    var text = "nombre sala:" + " " + code;

    const prueba = async () => {
        await GetActualGameService(gameId);

        let scoresList: ScoresJson = {
            whiteScore: gameStateBack.whiteScore,
            blackScore: gameStateBack.blackScore
        }

        setScores(scoresList);
        setTurn(gameStateBack.status)

        if (gameStateBack.status == 2) {
            setMessage("Partida terminada")
        }

        console.log("entro a prueba")
        setGameState(gameStateBack.newBoard);
    }



    const showCordenade = async (coord: Coordinate, actualBoard: ReversiBoard) => {
        if ((turn === 0 && !createdMatch) || (turn === 1 && createdMatch)) {
            let playerturn = turn
            await makeMoveMultiplayer(gameId, coord, actualBoard, playerturn)

            let scoresList: ScoresJson = {
                whiteScore: gameStateBack.whiteScore,
                blackScore: gameStateBack.blackScore
            }

            setScores(scoresList);

            if (actualBoard !== gameStateBack.newBoard) {
                setMessage("Movimiento correcto.");
                setTurn(gameStateBack.status)

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
            setGameState(gameStateBack.newBoard)
        }

    }

    const copyToClipboard = () => {
        Clipboard.setString(code)
    }

    return (
        <ScrollView>
            <View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                    <Text style={{ textAlignVertical: 'center' }}>{text}</Text>
                    <TouchableOpacity style={{ backgroundColor: "#009688", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, marginTop: 2 }} onPress={() => copyToClipboard()}>
                        <Text>Copiar codigo</Text>
                    </TouchableOpacity>
                </View>

                <GameContainer gameState={gameState} turn={turn} message={message} scores={scores} onClickCell={showCordenade} />

                <View style={{marginTop: 10,alignItems: 'center',}}>
                    <View style={{ width: '60%', elevation: 8, backgroundColor: "#114652", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 }}>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold", alignSelf: "center", textTransform: "uppercase" }} onPress={() => prueba()}>Actualizar</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}