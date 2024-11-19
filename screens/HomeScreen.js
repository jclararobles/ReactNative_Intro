import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Pantalla d'inici del joc
const HomeScreen = () => {
  const navigation = useNavigation(); // Hook per navegar entre pantalles

  // Funció que porta a la pantalla del joc
  const handleStartGame = () => {
    navigation.navigate('GameScreen');
  };

  return (
    <View style={styles.container}>
      {/* Títol del joc */}
      <Text style={styles.gameTitle}>GEOGUESSER JOVIAT</Text>
      
      {/* Botó per començar el joc */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleStartGame}
      >
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estil del contenidor principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252422',
    padding: 20,
  },
  // Estil del títol del joc
  gameTitle: {
    fontSize: 35,
    color: '#EB5E28',
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'center',
  },
  // Estil del botó de començar
  startButton: {
    backgroundColor: '#EB5E28',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  // Estil del text del botó
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

export default HomeScreen;
