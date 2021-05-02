import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import * as Progress from 'react-native-progress';
import { CreateRoom } from '../Services/Services';
import { UserContext } from '../Providers/UserProvider';



export default function ProgressBar() {
    const user = useContext(UserContext);
    CreateRoom(user);

    return (
        <ScrollView>
            <Progress.Bar progress={1} width={250} />

            <View>
                <Link to="/MpView" style={styles.LinkButton}>
                    <Text style={styles.LinkText}>Vamos a jugar</Text>
                </Link>
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