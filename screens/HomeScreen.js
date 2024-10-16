import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import FSection from '../components/FSection';


export default function HomeScreen({ navigation }) {
    const [userText, setUserText] = useState(''); // Estat per capturar el text

    const handlePress = (id) => {
      console.log("Han clicat al botó " + id);
      if (id == 2){
        navigation.navigate("Page1");
      }else if (id == 3){
        navigation.navigate("Page2");
      }
        

    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 100 }}>Home Screen</Text>
      <FSection  currentSection = {1} onPress={handlePress} />
    </View>
  );
}
