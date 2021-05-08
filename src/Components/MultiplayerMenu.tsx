import React from 'react';
import { Link } from 'react-router-native';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';


export default function MultiplayerMenu() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Reversi Multijugador</Text>

                <View style={styles.margintopBotones}>
                    <Link to="/ProgressBar" style={styles.LinkButton} >
                        <Text style={styles.LinkText}>Crear Sala</Text>
                    </Link>
                </View>

                <View style={styles.margintopBotones}>
                    <Link to="/JoinRoom" style={styles.LinkButton}>
                        <Text style={styles.LinkText}>Unirse a Sala</Text>
                    </Link>
                </View>

                <View style={styles.margintopBotones}>
                    <Link to="/" style={styles.LinkButton}>
                        <Text style={styles.LinkText}>Volver al menu</Text>
                    </Link>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../Images/mp.png')}
                        style={styles.ImageIconStyle}
                    />
                </View>

            </View>
        </ScrollView>
    )
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
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50
    },
    ImageIconStyle: {
        padding: 10,
        marginTop: 80,
        height: 250,
        width: 250,
        resizeMode: 'stretch',
    }
});