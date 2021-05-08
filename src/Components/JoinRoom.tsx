import React, { useContext, useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Link } from 'react-router-native';
import { UserContext } from "../Providers/UserProvider";
import { JoinRoomService } from "../Services/Services";

export default function JoinRoom() {
    const user = useContext(UserContext);

    const prueba = (text: any) => {
        JoinRoomService(user, text);
    }

    return (
        <ScrollView>
            <View>
                <Text style={styles.centerText}>Unirse A Sala</Text>

                <View style = {{display:'flex', justifyContent:'center', alignItems:'center', marginTop:30, marginBottom:30}}>
                <TextInput style={{borderColor: 'black', borderWidth: 1, width:'70%', textAlign:'center' }} placeholder="Introduzca el codigo de la sala" onChangeText={(text) => prueba(text)} />

                </View>

                <View style={styles.margintopBotones}>
                    <Link to="/MpView" style={styles.LinkButton}>
                        <Text style={styles.LinkText}>Unirse</Text>
                    </Link>
                </View>

                <View style={styles.margintopBotones}>
                    <Link to="/" style={styles.LinkButton}>
                        <Text style={styles.LinkText}>Volver al Menu</Text>
                    </Link>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../Images/entrar.png')}
                        style={styles.ImageIconStyle}
                    />
                </View>

            </View>

        </ScrollView>

    )
}

var styles = StyleSheet.create({
    centerText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
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
    ImageIconStyle: {
        padding: 10,
        marginTop: 80,
        height: 250,
        width: 250,
        resizeMode: 'stretch',
    }
});