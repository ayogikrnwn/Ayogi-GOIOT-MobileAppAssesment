import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Gap } from '../..';
import { ILHouseBdg } from '../../../assets';
import PaymentCard from './PaymentCard';

const Card = ({name,address,img, type, onPress}) => {
    if (type === 'payment-card') {
        return <PaymentCard name={name} onPress={onPress} img={img} />;
      }
      return (
        <View style={styles.container}>
            <Image source={img} style={styles.img}/>
            <Gap width={10} />
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.fwd}>></Text>
            </TouchableOpacity>

        </View>
    )
}
  


export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'black'
    },
    address: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'black'
    },
    btn: {
        paddingLeft: 60,
    },
    fwd: {
        fontSize: 40
    }
})
