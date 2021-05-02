import React, { useContext, useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Link } from 'react-router-native';
import { UserContext } from "../Providers/UserProvider";
import { JoinRoomService } from "../Services/Services";

export default function JoinRoom() {
    const user = useContext(UserContext);

    const prueba = (text:any) => {
        JoinRoomService(user, text);
    }

    return (
        <ScrollView>
            <View>
                <Text style={{ textAlign: 'center' }}>Unirse A Sala</Text>

                <TextInput style={{ borderColor: 'black', borderWidth: 1 }} onChangeText={(text) => prueba(text)} />

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
            </View>

        </ScrollView>

    )
}

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
    }
});