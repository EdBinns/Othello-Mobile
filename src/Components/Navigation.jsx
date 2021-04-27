import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/Components/Menu';
import SinglePlayer from './src/Components/SinglePlayer';



export default function Navigator() {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="SinglePlayer" component={SinglePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}