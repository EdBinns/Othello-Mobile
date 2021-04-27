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
                <Text>Componente tabla</Text>
                <Link to="/" style={styles.LinkButton}>
                    <Text style={styles.LinkText}>Volver al menu</Text>
                </Link>

                <View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        {
                            gameState.map((rowData, i) => (
                                <TableWrapper key={i} style={styles.row}>
                                    <Row data={rowData.map((cellData, j) => (
                                        <TouchableOpacity onPress={() => onClickCell({i,j},gameState)}>
                                            <Cell key={j} data={cellData} textStyle={styles.text} style={styles.row} />
                                        </TouchableOpacity>
                                    ))}>
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
    centerText: {
        textAlign: 'center'
    },
    margintopBotones: {
        marginTop: 10,
        alignItems: 'center',
    },
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
    container: {
        padding: 16,
        paddingTop: 30,
    },
    head: {
        height: 40,
        backgroundColor: 'red'
    },
    text: {
        backgroundColor: "red",
        margin: 6,
    },
    row: {
        backgroundColor: 'green',
        width: "100%",
        height: 40,
    }

});
