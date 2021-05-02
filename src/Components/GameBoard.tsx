import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ReversiBoard, ReversiCell, Coordinate } from '../Models/index';


type BoardProps = {
    gameState: ReversiBoard,
    isGameOver: boolean,
    onClickCell: (coord: Coordinate, gameState: ReversiBoard) => void
}

export default function GameBoard({ isGameOver, gameState, onClickCell }: BoardProps) {
    return (
        <View>
            <ScrollView>
                <View>
                    <Table style={{margin:10}} borderStyle={{ borderWidth: 1.5, borderColor: 'black' }}>
                        {
                            gameState.map((rowData, i) => (
                                <TableWrapper key={i} style={styles.row}>
                                    <Row data={rowData.map((cellData, j) => {
                                        if (cellData === 0) {
                                            return (
                                                <TouchableOpacity onPress={()  => onClickCell({ i, j }, gameState)}>
                                                    <Cell key={j} data={cellData} textStyle={styles.text} style={styles.black} />
                                                </TouchableOpacity>
                                            );
                                        } else if (cellData === 1) {
                                            return (
                                                <TouchableOpacity onPress={() => onClickCell({ i, j }, gameState)}>
                                                    <Cell key={j} data={cellData} textStyle={styles.text} style={styles.white} />
                                                </TouchableOpacity>
                                            );
                                        } else {
                                            return (
                                                <TouchableOpacity onPress={() => onClickCell({ i, j }, gameState)}>
                                                    <Cell key={j} data={cellData} textStyle={styles.text} style={styles.empty} />
                                                </TouchableOpacity>
                                            );
                                        }

                                    })}>
                                    </Row>
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>

            </ScrollView>
        </View>

    );
};



var styles = StyleSheet.create({
    LinkButton: {
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
    text: {
        color: "transparent",
        margin: 6,
    },
    row: {
        backgroundColor: '#22c878',
        width: "100%",
        height: 40,
    },
    empty: {
        margin: 10,
    },
    white: {
        width: '60%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 10

    },
    black: {
        width: '60%',
        height: '60%',
        backgroundColor: 'black',
        borderRadius: 50,
        margin:10
    },
});
