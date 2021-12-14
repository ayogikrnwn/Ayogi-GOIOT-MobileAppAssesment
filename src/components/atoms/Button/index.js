import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({text}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#75E166',
        paddingVertical: 10,
    borderRadius: 10,
    },
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'

    }
})
