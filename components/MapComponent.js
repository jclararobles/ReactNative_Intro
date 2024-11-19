import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = ({ latitude, longitude, onMapPress }) => {
  return (
    <MapView
      style={{ width: '100%', height: 300 }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={onMapPress}
      mapType="terrain"  // Mapa tipo Terrain
    >
      <Marker coordinate={{ latitude, longitude }} title="Selected Location" />
    </MapView>
  );
};

export default MapComponent;
