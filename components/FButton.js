import React from 'react';
import { View, Text, Button} from 'react-native';
    
export default function FButton({ 
    selectedImage,
    unselectedImage,
    id,
    isSelected,
    onPress }) {
 
  
    return (
        <TouchableOpacity onPress={() => onPress(id)}>
            <Image
                source={isSelected ? selectedImage : unselectedImage}
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100, // Ajusta el tamaño según tus necesidades
        height: 100,
    },
});
