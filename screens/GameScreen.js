import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDistance } from 'geolib';

const GameScreen = ({ navigation }) => {
  // Definició d'estats per controlar les dades i la interacció de l'usuari
  const [locations, setLocations] = useState([]); // Llista de localitzacions des de Firebase
  const [currentLocation, setCurrentLocation] = useState(null); // Localització actual que l'usuari ha d'endevinar
  const [userLocation, setUserLocation] = useState(null); // Localització seleccionada per l'usuari
  const [distance, setDistance] = useState(null); // Distància entre la localització seleccionada i la correcta
  const [showCorrectLocation, setShowCorrectLocation] = useState(false); // Mostra la ubicació correcta després de "CHECK"
  const [score, setScore] = useState(0); // Puntuació de l'intent actual
  const [showPopup, setShowPopup] = useState(false); // Mostra la finestra emergent amb la puntuació
  const [isChecked, setIsChecked] = useState(false); // Indica si ja s'ha prement el botó "CHECK"
  const [totalPoints, setTotalPoints] = useState(0); // Punts acumulats durant el joc
  const [showNextButton, setShowNextButton] = useState(false); // Controla la visibilitat del botó "NEXT"

  // Funció per obtenir les dades de Firebase quan el component es carrega
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsCollection = collection(db, 'Locations');
        const locationDocs = await getDocs(locationsCollection);
        const locationsData = locationDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLocations(locationsData);
        setCurrentLocation(locationsData[0] || null); // Selecciona la primera localització
      } catch (error) {
        console.error("Error al obtenir les ubicacions:", error);
      }
    };

    fetchLocations();
  }, []);

  // Funció per comprovar la distància i calcular els punts
  const handleCheck = () => {
    if (userLocation && currentLocation) {
      const calculatedDistance = getDistance(
        { latitude: userLocation.latitud, longitude: userLocation.longitud },
        { latitude: currentLocation.latitud, longitude: currentLocation.longitud }
      );
      setDistance(calculatedDistance / 1000); // Convertir metres a quilòmetres
      const points = calculatePoints(calculatedDistance);
      setScore(points);
      setTotalPoints(prevTotal => prevTotal + points); // Actualitza el total de punts acumulats
      setShowCorrectLocation(true); // Mostra la ubicació correcta
      setShowPopup(true); // Mostra la finestra emergent amb la puntuació
      setIsChecked(true); // Marca que ja s'ha comprovat
      setShowNextButton(true); // Fa visible el botó "NEXT"
    }
  };

  // Funció per calcular els punts segons la distància
  const calculatePoints = (distance) => {
    const km = distance / 1000;
    if (km <= 1) return 1000;
    if (km <= 5) return 500;
    if (km <= 10) return 300;
    if (km <= 50) return 100;
    if (km <= 100) return 50;
    if (km <= 500) return 10;
    return 0;
  };

  // Funció per seleccionar una localització al mapa
  const handleMapPress = (e) => {
    if (!isChecked) {
      const { latitude, longitude } = e.nativeEvent.coordinate;
      setUserLocation({ latitud: latitude, longitud: longitude });
    }
  };

  // Funció per passar a la següent localització
  const handleNext = () => {
    const currentIndex = locations.indexOf(currentLocation);
    if (currentIndex < locations.length - 1) {
      setCurrentLocation(locations[currentIndex + 1]); // Selecciona la següent localització
      resetGameState(); // Reinicia l'estat per la propera ronda
    } else {
      // Navega a la pantalla de puntuació final amb els punts totals
      navigation.navigate('ScoreScreen', { totalScore: totalPoints });
    }
  };

  // Funció per reiniciar l'estat per una nova ronda
  const resetGameState = () => {
    setUserLocation(null);
    setDistance(null);
    setScore(0);
    setShowCorrectLocation(false);
    setShowPopup(false);
    setIsChecked(false);
    setShowNextButton(false);
  };

  // Renderitza la interfície del joc
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GEOGUESSER JOVIAT</Text>
      {currentLocation && (
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>Where is {currentLocation.nombre}?</Text>
          </View>
          <Text style={styles.questionNumber}>{locations.indexOf(currentLocation) + 1}/4</Text>
          
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitud,
              longitude: currentLocation.longitud,
              latitudeDelta: 0.000,
              longitudeDelta: 0.000,
            }}
            onPress={handleMapPress}
            mapType="satellite"
          >
            {userLocation && (
              <Marker 
                coordinate={{ latitude: userLocation.latitud, longitude: userLocation.longitud }} 
                title="Your Location"
                pinColor="blue"
              />
            )}
            {showCorrectLocation && (
              <Marker 
                coordinate={{ latitude: currentLocation.latitud, longitude: currentLocation.longitud }} 
                title={currentLocation.nombre}
                pinColor="red"
              />
            )}
            {isChecked && userLocation && currentLocation && (
              <Polyline
                coordinates={[
                  { latitude: userLocation.latitud, longitude: userLocation.longitud },
                  { latitude: currentLocation.latitud, longitude: currentLocation.longitud }
                ]}
                strokeColor="#0000FF"
                strokeWidth={3}
              />
            )}
          </MapView>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.checkButton} onPress={handleCheck} disabled={isChecked}>
              <Text style={styles.checkButtonText}>CHECK</Text>
            </TouchableOpacity>
            
            {showNextButton && (
              <TouchableOpacity 
                style={styles.nextButton} 
                onPress={handleNext}
              >
                <Text style={styles.nextButtonText}>NEXT</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {showPopup && (
            <View style={styles.popupContainer}>
              <Text style={styles.popupText}>SCORE</Text>
              <Text style={styles.popupPoints}>{score} Points</Text>
              <Text style={styles.popupDistance}>Distance: {distance.toFixed(2)} km</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#252422',
  },
  title: {
    fontSize: 35,
    marginTop: 45,
    marginBottom: 20,
    color: '#EB5E28',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  questionContainer: {
    backgroundColor: '#CCC5B9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  question: {
    fontSize: 24,
    color: '#252422',
    textAlign: 'center',
    fontFamily: 'PressStart2P',
    fontWeight: 'bold',
  },
  questionNumber: {
    fontSize: 24,
    color: '#CCC5B9',
    marginBottom: 20,
    fontFamily: 'PressStart2P',
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '60%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  checkButton: {
    backgroundColor: '#EB5E28',
    paddingVertical: 18,
    paddingHorizontal: 45,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  nextButton: {
    backgroundColor: '#CCC5B9',
    paddingVertical: 18,
    paddingHorizontal: 45,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#252422',
    fontSize: 20,
    fontWeight: '900',
  },
  popupContainer: {
    position: 'absolute',
    top: '40%',
    backgroundColor: '#EB5E28',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popupText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  popupPoints: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  popupDistance: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'normal',
    marginTop: 5,
  },
});

export default GameScreen;
