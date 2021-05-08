import React, { useState, useContext } from "react";
import { auth, generateUserDocument } from "../../firebase";
import { View, Text, TextInput, Button, StatusBar, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'react-router-native';
import { UserContext } from "../Providers/UserProvider";


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');


  const createUserWithEmailAndPasswordHandler = async (email, password) => {
    try {
      if ((email !== "") && (password !== "") && (displayName !== "")) {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, { displayName });
      } else {
        alert("Faltan campos por rellenar");
      }
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log("error");
      if (errorCode === 'auth/weak-password') {
        alert('Contraseña débil, Inténtalo de nuevo.');
      }
      else if (errorCode === 'auth/email-already-in-use') {
        alert('Este email ya se encuentra registrado.')
      }
      else if (errorCode === 'auth/invalid-email') {
        alert('Email invalido, pruebe con otro');
      } else {
        alert(errorMessage)
      }
    };

    setEmail("");
    setPassword("");
    setDisplayName("");
  };


  return (
    <View>
      <StatusBar />
      <Text style={styles.centerText}>BIENVENIDOS AL REGISTRO SISTEMA</Text>

      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} value={displayName} onChangeText={displayName => setDisplayName(displayName)} placeholder="Ingrese su nickname"></TextInput>
      </View>

      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} value={email} onChangeText={email => setEmail(email)} placeholder="Ingrese su correo"></TextInput>
      </View>

      <View style={styles.viewInput}>
        <TextInput style={styles.textInput} value={password} onChangeText={password => setPassword(password)} placeholder="Ingrese su contraseña" ></TextInput>
      </View>

      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={[styles.LinkButton, { marginTop: 20 }]} onPress={() => { createUserWithEmailAndPasswordHandler(email, password) }}>
          <Text style={styles.LinkText}>Registrarme</Text>
        </TouchableOpacity>
      </View>

      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text>¿Ya tienes una cuenta?</Text>
        <Link style={[styles.LinkButton2, { marginTop: 20 }]} to="/" >
          <Text style={styles.LinkText}>Iniciar Sesion</Text>
        </Link>
      </View>

      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../Images/agregarUsuario.png')}
          style={styles.ImageIconStyle}
        />
      </View>



    </View>
  );
}


var styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
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
  LinkButton2: {
    width: '60%',
    elevation: 8,
    backgroundColor: "#17a5c2",
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
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  viewInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    textAlign: 'center'
  }
});

export default SignUp;
