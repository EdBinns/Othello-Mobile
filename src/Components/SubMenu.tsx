import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import { Link } from 'react-router-native';
import { ListPicker } from 'react-native-ultimate-modal-picker';
import { startResponse } from '../Services/Services';
import { chooseLvl } from './GameViewAI';

export default function subMenu() {

  const items: any = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.centerText}>Bienvenido al menu de Reversi</Text>
        <ListPicker title="Selecciona el nivel" items={items} onChange={(item) => chooseLvl(item)} />
        <View style={styles.margintopBotones}>
          <Link to="/GameViewAI" style={styles.LinkButton}>
            <Text style={styles.LinkText}>Jugar</Text>
          </Link>
        </View>
        <View style={styles.margintopBotones}>
          <Link to="/" style={styles.LinkButton}>
            <Text style={styles.LinkText}>Volver</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>

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