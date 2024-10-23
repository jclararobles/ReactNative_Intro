import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import FSection from '../components/FSection';
import QuestionCell from '../components/QuestionCell';

export default function HomeScreen({ navigation }) {
    // Datos harcodeados
    const data = [
        {
            id: '1',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testfirebase-a0eef.appspot.com/o/paris.jpg?alt=media&token=45098870-e2df-4253-82ee-9c1c5efb01ab',
            title: 'Paris',
            latitude: 48.8566,
            longitude: 2.3522
        },
        {
            id: '2',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testfirebase-a0eef.appspot.com/o/barcelona.jpg?alt=media&token=73da5e80-7980-4d0b-9671-36dbd2d18bf5',
            title: 'New York',
            latitude: 40.7128,
            longitude: -74.0060
        },
        {
            id: '3',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testfirebase-a0eef.appspot.com/o/barcelona.jpg?alt=media&token=73da5e80-7980-4d0b-9671-36dbd2d18bf5',
            title: 'London',
            latitude: 51.5074,
            longitude: -0.1278
        },
        {
            id: '4',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/testfirebase-a0eef.appspot.com/o/barcelona.jpg?alt=media&token=73da5e80-7980-4d0b-9671-36dbd2d18bf5',
            title: 'Tokyo',
            latitude: 35.6762,
            longitude: 139.6503
        },
        {
            id: '5',
            imageUrl: '',
            title: 'Barcelona',
            latitude: 41.3851,
            longitude: 2.1734
        },
    ];

    // Función para manejar los eventos onPress de las celdas
    const handlePress = (id) => {
      console.log("Han clicat al botó " + id);
      if (id === '2') {
        navigation.navigate("Page1");
      } else if (id === '3') {
        navigation.navigate("Page2");
      }
    };

    // Renderizar cada celda
    const renderItem = ({ item }) => (
      <QuestionCell 
        imageUrl={item.imageUrl}
        title={item.title}
        latitude={item.latitude}
        longitude={item.longitude}
        onPress={() => handlePress(item.id)}
      />
    );

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7, backgroundColor: 'white' }}>
          <Text style={{ marginTop: 100, textAlign: 'center' }}>Home Screen</Text>

          {/* FlatList para mostrar el array de celdas */}
          <View style={{height:'50%'}}>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          </View>
          
        </View>

        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <FSection currentSection={1} onPress={handlePress} />
        </View>
      </View>
    );
}
