import React from 'react';
import { View, Text, Button} from 'react-native';

export default function FSection({  }) {
    
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
                    flexDirection:'row' }}>
      <Text >Button 1</Text>
      <Text style={{marginLeft:10 }}>Button 2</Text>
      <Text style={{marginLeft:10 }}>Button 3</Text>
      
    </View>
  );
}
