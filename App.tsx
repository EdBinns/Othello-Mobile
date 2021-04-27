import React from 'react';
import UserProvider from "./src/Providers/UserProvider"
import Application from "./src/Components/Application";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Application />
      </UserProvider>
    </NavigationContainer>
  );
}

