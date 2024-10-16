import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import FSection from '../components/FSection';


export default function HomeScreen({ navigation }) {
    const [userText, setUserText] = useState(''); // Estat per capturar el text

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 100 }}>Home Screen</Text>
      <FSection/>
    </View>
  );
}
