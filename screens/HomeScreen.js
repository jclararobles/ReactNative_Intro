import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [userText, setUserText] = useState(''); // Estat per capturar el text

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>User: </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginBottom: 20,
          paddingHorizontal: 10
        }}
        placeholder="Enter your text"
        value={userText}
        onChangeText={text => setUserText(text)} // Actualitza el text quan l'usuari escriu
      />
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate('Page1', { userText })} // Passa el text com a paràmetre
      />
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
}
