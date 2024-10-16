import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import FSection from '../components/FSection';

export default function Page2({ navigation }) {
  
  const handlePress = (id) => {
    console.log("Han clicat al botó " + id);
    if (id == 1){
      navigation.navigate("Home");
    }else if (id == 2){
      navigation.navigate("Page1");
    }
      

  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 100 }}>Page 2 Screen</Text>
      <FSection  currentSection = {3} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '50%'
  },
});