import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Page2({ navigation }) {
  const initialRegion = {
    latitude: 41.63146952409751, 
    longitude: 1.668395767819219,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const myData = [ 
    {"latitude": 41.63146952409751, "longitude": 1.668395767819219, "title": "Location 1", "description": "Description for Location 1"},
    {"latitude": 41.93026904288218, "longitude": 0.3499672496335689, "title": "Location 2", "description": "Description for Location 2"},
    {"latitude": 40.883272969731266, "longitude": -0.12182324894461093, "title": "Location 3", "description": "Description for Location 3"},
    {"latitude": 41.03457283919712, "longitude": 0.8476094850154379, "title": "Location 4", "description": "Description for Location 4"},
    {"latitude": 41.92065222683825, "longitude": 2.7153831204961243, "title": "Location 5", "description": "Description for Location 5"}
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Mapa interactiu */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Mostra tots els marcadors del myData */}
        {myData.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.title}
            description={location.description}
            onCalloutPress={() => navigation.navigate('Details', { title: location.title, description: location.description })}
          />
        ))}
      </MapView>

      {/* Botó per tornar a la pantalla anterior */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '50%'
  },
});