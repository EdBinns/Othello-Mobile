import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from "../../firebase";
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      <View >
        <Text h1 style={styles.centerText}>Bienvenido al menu de Reversi</Text>

        <View style={styles.margintopBotones}>

          <Button title="Open List Screen"
            onPress={() => {
              navigation.navigate('SinglePlayer');
            }}
          />

        </View>
        <View style={styles.margintopBotones}>
          <Button title="Jugar vs Persona" />
        </View>
        <View style={styles.margintopBotones}>
          <Button title="Jugar Online" />
        </View>
        <View style={styles.margintopBotones}>
          <Button title="Salir" onPress={() => { auth.signOut() }} />
        </View>
      </View>
    </SafeAreaView>

  );
}

var styles = StyleSheet.create({
  centerText: {
    textAlign: 'center'
  },
  margintopBotones: {
    marginTop: 10,
    alignItems: 'center'
  },

});

const styles2 = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});