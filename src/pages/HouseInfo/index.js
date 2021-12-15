import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICLamp, ICLine, ICWater, ICWifi } from '../../assets';
import { Button, ButtonAlternate, Gap, Header } from '../../components';

const HouseInfo = () => {
    return (
        <View style={{flex: 1}}>
           
            <Header title="House Information" />
            <Gap height={10} />
            <View style={{paddingHorizontal:20}}>
            <View style={styles.content}>
            <Text style={styles.title}>Dummy House</Text>
            <Text style={styles.desc}>Bandung, West Java</Text>
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
            <Text style={styles.desc}>1.000.000</Text>
                <Text style={styles.desc}>1.000.000</Text>
                <Text style={styles.desc}>300.000</Text>
            </View>
            <Gap height={20} />
            <ICLine />
            <Gap height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Total Billing</Text>
            <ButtonAlternate text="Paid" />
            </View>
           
            <Text style={styles.desc}>Rp 2.300.000</Text>
            </View>
            </View>
            <Gap height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button type="bluevers" text="Edit Profile" />
            <Button  text="Edit Profile" />
            </View>
            
           
           
           
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
