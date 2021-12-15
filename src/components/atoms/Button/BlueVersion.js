import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const BlueVersion = ({text, type,onPress}) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     <Text style={styles.text}>{text} </Text>
    </TouchableOpacity>
  );
};

export default BlueVersion;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#6688E1',
        paddingVertical: 20,
        paddingHorizontal:20,
    borderRadius: 10,
    },
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'

    }
});