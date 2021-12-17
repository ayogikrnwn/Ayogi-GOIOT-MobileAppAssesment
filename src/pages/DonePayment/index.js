import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICChecked } from '../../assets';
import { Gap } from '../../components';

const DonePayment = ({navigation}) => {
    useEffect(() => {

        setTimeout(() => {
        
            navigation.replace('MainApp');
  
        }, 3000);
     
  
      
    }, [navigation]);
    return (
        <View style={styles.container}>
            <View>
            <Image source={ICChecked} />
          
            </View>
            <Gap height={15} />
            <Text style={styles.title}>YOU DID IT!</Text>
            <Text style={styles.desc}>You have pay the bill for this month.
                Enjoy!</Text>
        </View>
    )
}

export default DonePayment;

const styles = StyleSheet.create({
    container : {flex: 1, alignItems: 'center',
    justifyContent: 'center',},
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: 'black'
    },
    desc: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: 'black'
    }
})
