import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreScreen = ({ route, navigation }) => {
  const { totalScore, distance } = route.params;

  let calculatedScore = totalScore;

  if (distance === 1000) {
    calculatedScore += 1000;  // Si la distancia es exactamente 1000 km, se suman 1000 puntos.
  } else if (distance > 1000) {
    calculatedScore = totalScore;  // Si la distancia es mayor a 1000 km, no se suman puntos.
  } else if (distance <= 1000 && distance > 800) {
    calculatedScore += 5;  // Si la distancia está entre 1000 y 800 km, se suman 5 puntos.
  } else if (distance <= 800 && distance > 500) {
    calculatedScore += 10;  // Si la distancia está entre 800 y 500 km, se suman 10 puntos.
  } else if (distance < 500) {
    // Si la distancia es menor a 500 km, el puntaje es progresivo según la cercanía.
    const additionalPoints = Math.floor((500 - distance) / 10) * 10;  // Se suman 10 puntos por cada 10 km.
    calculatedScore += additionalPoints;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>GEOGUESSER JOVIAT</Text>
      <Text style={styles.title}>YOUR TOTAL SCORE</Text>
      <Text style={styles.score}>
        <Text style={styles.scoreValue}>{calculatedScore}</Text> <Text style={styles.points}>POINTS</Text>
      </Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252422',
    padding: 20,
  },
  gameTitle: {
    fontSize: 35,
    color: '#EB5E28',
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: 32,
    color: '#CCC5B9',
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  score: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  scoreValue: {
    fontWeight: '600',
    fontSize: 40,
  },
  points: {
    fontSize: 40,
    fontWeight: '600',
  },
  homeButton: {
    backgroundColor: '#EB5E28',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default ScoreScreen;
