import React from 'react';
import { View, Text, Button} from 'react-native';

export default function Page1({ route, navigation }) {
    const { userText } = route.params; // Rebem el text passat des de HomeScreen
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page1 Screen</Text>
      <Text>User input: {userText}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go back"
        onPress={()=> navigation.goBack()}
      />
    </View>
  );
}
