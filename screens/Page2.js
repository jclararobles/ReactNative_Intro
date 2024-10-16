import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Page2({ navigation }) {
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page2 Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '50%'
  },
});