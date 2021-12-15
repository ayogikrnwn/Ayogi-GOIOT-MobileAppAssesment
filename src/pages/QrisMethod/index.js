import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICMandiri, ICQrisCode } from '../../assets';
import { Button, Gap, Header, Input } from '../../components';

const QrisMethod = () => {
    return (
        <View style={{flex: 1}}>
            <Header title="QRIS Payment" />
            <Gap height={20} />
            <View style={styles.content}>
            <Text style={styles.title}>SCAN THIS QRIS</Text>
            <Gap height={25} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={ICQrisCode} />
            </View>
    
            <Gap height={75} />
            <Text style={{textAlign: 'center'}}>Already Transfer?</Text>
            <Gap height={5} />
            <Button text="Procceed" />
            </View>
            <Gap height={20} />
           <Text>**this page is dummy*</Text>
        </View>
    )
}

export default QrisMethod;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    },
    desc: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: 'black'
    }
})
