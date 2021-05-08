import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { auth } from "../../firebase";
import { Link } from 'react-router-native';
import { startMatch } from '../Services/Services';


export default function Menu() {
  startMatch(8);

  return (
    <SafeAreaView>
      <StatusBar />
      <View >
        <Text h1 style={styles.centerText}>Bienvenido al menu de Reversi</Text>

        <View style={styles.margintopBotones}>
          <Link to="/SubMenu" style={styles.LinkButton}>
            <Text style={styles.LinkText}>Jugar vs Máquina</Text>
          </Link>
        </View>

        <View style={styles.margintopBotones}>
          <Link to="/GameView" style={styles.LinkButton}>
            <Text style={styles.LinkText}>Jugar vs Jugador</Text>
          </Link>
        </View>

        <View style={styles.margintopBotones}>
          <Link to="/MultiplayerMenu" style={styles.LinkButton}>
            <Text style={styles.LinkText}>Multijugador</Text>
          </Link>
        </View>
        <View style={styles.margintopBotones}>
          <TouchableOpacity onPress={() => { auth.signOut() }} style={styles.LinkButton}>
            <Text style={styles.LinkText}>Cerrar sesion</Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../Images/reversi.png')}
              style={styles.ImageIconStyle}
            />
        </View>
      </View>
    </SafeAreaView>

  );
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
    borderRadius: 10
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
    marginTop: 50,
    height: 200,
    width: 200,
    resizeMode: 'stretch',
    borderWidth:2,
    borderColor:'black'
  }

});
