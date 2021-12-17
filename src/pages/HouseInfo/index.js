import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ICLamp, ICLine, ICWater, ICWifi } from '../../assets';
import { Button, ButtonAlternate, Gap, Header } from '../../components';
import { storeData } from '../../utils';

const HouseInfo = ({route, navigation}) => {
    const itemHouse = route.params;
    const updateInfo = () => {
        
        const data = {
            name: itemHouse.name,
            address: itemHouse.address,
            electricBills: itemHouse.electricBills,
            pdamBill: itemHouse.pdamBill,
            wifiBill: itemHouse.wifiBill,
            id: itemHouse.id,
            status: itemHouse.status,
          }
          storeData('house', data);
        navigation.navigate('UpdateHouseInfo')
    }
    return (
        <View style={{flex: 1}}>
           <ScrollView>
           <Header title="House Information" />
            <Gap height={10} />
            <View style={{paddingHorizontal:20}}>
            <View style={styles.content}>
            <Text style={styles.title}>{itemHouse.name}</Text>
            <Text style={styles.desc}>{itemHouse.address}</Text>
            <Gap height={25} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ICLamp />
            <ICWater />
            <ICWifi />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.desc}>1200 VA</Text>
                <Text style={styles.desc}>n/a</Text>
                <Text style={styles.desc}>20 Mbps</Text>
            </View>
            <Gap height={20} />
            <ICLine />
            <Gap height={20} />
            <Text style={styles.desc}>Recent Billing House </Text>
            <Gap height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ICLamp />
            <ICWater />
            <ICWifi />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.desc}>Rp. {itemHouse.electricBills}</Text>
                <Text style={styles.desc}>Rp.  {itemHouse.pdamBill}</Text>
                <Text style={styles.desc}>Rp. {itemHouse.wifiBill}</Text>
            </View>
            <Gap height={20} />
            <ICLine />
            <Gap height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Total Billing</Text>
            <ButtonAlternate text="Paid" />
            </View>
           
            <Text style={styles.desc}>{itemHouse.electricBills + itemHouse.pdamBill + itemHouse.wifiBill}</Text>
            </View>
            </View>
            <Gap height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button type="bluevers" text="Update Info"  onPress={updateInfo} />
            <Button  text="Pay Bill" onPress={()=> navigation.navigate('Payment', itemHouse)} />
            </View>
            
           </ScrollView>
            
        </View>
    )
}

export default HouseInfo;

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        width: 320,
        height: 500,
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: 'black'
    },
    desc: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'black'
    }
})
