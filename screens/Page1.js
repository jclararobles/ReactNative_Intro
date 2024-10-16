import React from 'react';
import { View, Text, Button} from 'react-native';
import FSection from '../components/FSection';

export default function Page1({ navigation }) {
  const handlePress = (id) => {
    console.log("Han clicat al botó " + id);
    if (id == 1){
      navigation.navigate("Home");
    }else if (id == 3){
      navigation.navigate("Page2");
    }
      

  };
  
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 100 }}>Page 1 Screen</Text>
      <FSection  currentSection = {2} onPress={handlePress} />
    </View>
  );
}
