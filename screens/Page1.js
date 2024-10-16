import React from 'react';
import { View, Text, Button} from 'react-native';
import FSection from '../components/FSection';

export default function Page1({ navigation }) {
  const handlePress = (id) => {
    console.log("Han clicat al botó " + id);
  };
  
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page1 Screen</Text>
      <FSection/>
      <FSection  currentSection = {2} onPress={handlePress} />
    </View>
  );
}
