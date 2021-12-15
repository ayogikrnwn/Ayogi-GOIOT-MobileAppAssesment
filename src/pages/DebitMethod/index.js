import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';

const DebitMethod = () => {
    return (
        <View style={{flex: 1}}>
            <Header title="CC/Debit Payment" />
            <Gap height={20} />
            <View style={styles.content}>
            <Text style={styles.title}>Fill the form below</Text>
            <Gap height={15} />
            <Input label="Card Number" />
            <Gap height={5} />
            <Input label="Card Holder Name" />
            <Gap height={5} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Input label="VCC" />
            </View>
            <Gap height={25} />
            <Button text="Procceed" />
            </View>
           <Text>**this page is dummy*</Text>
        </View>
    )
}

export default DebitMethod;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: 'black'
    }
})
