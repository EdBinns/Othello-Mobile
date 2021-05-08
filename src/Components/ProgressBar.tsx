import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';
import * as Progress from 'react-native-progress';
import { CreateRoom } from '../Services/Services';
import { UserContext } from '../Providers/UserProvider';



export default function ProgressBar() {
    const user = useContext(UserContext);
    CreateRoom(user);

    return (
        <ScrollView>
            <Text style={styles.centerText}>Partida Creada</Text>

            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="/MpView" style={styles.LinkButton}>
                    <Text style={styles.LinkText}>Vamos a jugar</Text>
                </Link>
            </View>

            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../Images/palanca.png')}
                    style={styles.ImageIconStyle}
                />
            </View>
        </ScrollView>
    )
}

var styles = StyleSheet.create({
    centerText: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50
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
        marginTop: 120,
        height: 250,
        width: 250,
        resizeMode: 'stretch',
      }

});