import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';

const UpdateHouseInfo = () => {
    return (
        <View style={{flex: 1}}>
            <Header title="Update House Info" />
            <Gap height={25} />
            <View style={styles.content}>
           <Input label="House Name" />
           <Gap height={5} />
           <Input label="Location House" />
           <Gap height={5} />
           <Input label="Electricity Bills" />
           <Gap height={5} />
           <Input label="PDAM Bills" />
           <Gap height={5} />
           <Input label="WiFi Bills" />
           <Gap height={15} />
           <Button text="Update" />
            </View>
         
        </View>
    )
}

export default UpdateHouseInfo;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    }
})
