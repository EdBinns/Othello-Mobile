import React from 'react';
import { ReversiCell, ScoresJson } from '../Models';
import { startResponse } from '../Services/Services';
import { Text, View } from 'react-native';


type Props = {
    turn: ReversiCell,
    message: string,
    scores: ScoresJson
}

export default function GameInfo({ turn, message, scores }: Props) {
    return (
        <View>
            <Text>hola</Text>
        </View>

    );
}


