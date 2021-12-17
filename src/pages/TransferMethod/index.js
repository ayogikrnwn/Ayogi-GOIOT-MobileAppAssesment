import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICMandiri } from '../../assets';
import { Button, Gap, Header, Input } from '../../components';

const TransferMethod = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <Header title="Transfer Bank Payment" />
            <Gap height={20} />
            <View style={styles.content}>
            <Text style={styles.title}>TRANSFER TO THIS ACCOUNT</Text>
            <Gap height={25} />
            <View style={{flexDirection: 'row'}}>
            <Image source={ICMandiri} />
            <Gap width={15} />
            <View>
            <Text style={styles.title}>131 001 001 002</Text>
            <Text style={styles.desc}>DUMMY ACCOUNT</Text>
            </View>
           
            </View>
           
            <Gap height={75} />
            <Text style={{textAlign: 'center'}}>Already Transfer?</Text>
            <Gap height={5} />
            <Button text="Procceed" />
            </View>
            <Gap height={20} onPress={()=> navigation.navigate('DonePayment')} />
           <Text>**this page is dummy*</Text>
        </View>
    )
}

export default TransferMethod;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    },
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
