import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICBankTrf, ICLine, ICMCVisa, ICQris } from '../../assets';
import { Card, Gap, Header } from '../../components';

const Payment = ({route,navigation}) => {
    const itemHouse = route.params;
    return (
        <View style={{flex: 1}}>
            <Header title="Payment" />
            <Gap height={15} />
            <View style={{paddingHorizontal: 20}}>
            
            <Text style={styles.name}>Total Price</Text>
            <Text style={styles.desc}>{itemHouse.electricBills + itemHouse.pdamBill + itemHouse.wifiBill}</Text>
            <Gap height={15} />
            <ICLine />
            <Gap height={15} />
            <Text style={styles.desc}>Choose Payment Method</Text>
            <Gap height={15} />
            <Card type="payment-card" name="Debit/CC Card" img={ICMCVisa} onPress={()=> navigation.navigate('DebitMethod', itemHouse)}/>
            <Gap height={15} />
            <Card type="payment-card" name="Bank Transfer" img={ICBankTrf} onPress={()=> navigation.navigate('TransferMethod', itemHouse)}/>
            <Gap height={15} />
            <Card type="payment-card" name="QRIS Payment" img={ICQris} onPress={()=> navigation.navigate('QrisMethod',itemHouse)}/>
            </View>
           
        </View>
    )
}

export default Payment;

const styles = StyleSheet.create({
    name: {
        fontFamily: 'Roboto-Bold',
        color: 'black',
        fontSize: 24,
    },
    desc: {
        fontFamily: 'Roboto-Regular',
        color: 'black',
        fontSize: 18,
    }
})
