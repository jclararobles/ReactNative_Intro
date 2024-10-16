import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FSection from '../components/FSection';

export default function Page2({ navigation }) {
  
  const handlePress = (id) => {
    console.log("Han clicat al botó " + id);
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page2 Screen</Text>
      <FSection  currentSection = {3} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '50%'
  },
});