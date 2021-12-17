import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BlueVersion from './BlueVersion';

const Button = ({text, type, onPress}) => {
    if (type === 'bluevers') {
        return <BlueVersion onPress={onPress} text={text} />;
      }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#75E166',
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
})
