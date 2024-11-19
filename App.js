import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Desactiva el encabezado en la pantalla de inicio
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ headerShown: false }} // Desactiva el encabezado en la pantalla del juego
        />
        <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
          options={{ headerShown: false }} // Desactiva el encabezado en la pantalla de puntajes
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
