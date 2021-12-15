import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gap } from '../..';
import { ICMCVisa } from '../../../assets';

const PaymentCard = ({name, onPress, img}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={img} />
            <Gap width={10} />
            <View style={{ justifyContent:'center'}} >
            <Text style={styles.name}>{name}</Text>
          
            </View>
            

        </TouchableOpacity>
    )
}

export default PaymentCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 70,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10

    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'black',
        paddingLeft: 10
    },
   
    btn: {
        paddingLeft: 60,
    },
    fwd: {
        fontSize: 40
    }
})
