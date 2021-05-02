import React from 'react';
import { ReversiCell, ScoresJson } from '../Models';
import { startResponse } from '../Services/Services';
import { Text, View, StyleSheet, Button, Alert, ToastAndroid } from 'react-native';


type Props = {
    turn: ReversiCell,
    message: string,
    scores: ScoresJson
}



export default function GameInfo({ turn, message, scores }: Props) {
    return (
        <View>
            <View style={styles.columns}>
                <Text style={[styles.espaciado, (turn === 1) ? styles.jugador1 : styles.jugador2, styles.white]}>{scores.whiteScore}</Text>
                <Text style={[styles.espaciado, (turn === 1) ? styles.jugador2 : styles.jugador1, styles.black]}>{scores.blackScore}</Text>
            </View>
            <View>
                <Text style={styles.info}>{message}</Text>
            </View>
        </View>

    );
}

var styles = StyleSheet.create({
    columns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    espaciado: {
        marginTop: 30,
        fontSize: 20,
        padding: 5,
        borderWidth: 5,
        borderRadius: 50,
        width: 80,
        height: 80,
        textAlign:'center',
        textAlignVertical:'center'
    },
    jugador1: {
        borderColor: '#00ff2e',
        color:'#00ff2e'
    },
    jugador2: {
        borderColor: 'grey',
        color:'grey'
    },
    white: {
        backgroundColor: 'white'
    },
    black: {
        backgroundColor: 'black'
    },
    info: {
        textAlign: 'center',
        marginTop: 20
    }
});


