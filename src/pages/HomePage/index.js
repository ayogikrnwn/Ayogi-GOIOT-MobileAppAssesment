import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ILHouseBdg, ILHouseDpk, PicHouseOne, PicHouseTwo } from '../../assets';
import { Card, Gap, Header } from '../../components';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Header date="05 Dec 2021" greet="Hello,"  name="Ayogi Kurniawan" />
            <Gap height={20} />
            <View style={styles.content}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image source={PicHouseOne} />
                <Gap width={5} />
                <Image source={PicHouseTwo} />
                <Gap width={10} />
                </ScrollView>
                <Gap height={15} />
                <Text style={styles.text}>List House</Text>
                <Gap height={15} />
                <Card name="Dummy House 1" address="Bandung, West Java" img={ILHouseBdg} />
                <Gap height={13} />
                <Card name="Dummy House 2" address="Depok, West Java" img={ILHouseDpk} />
            </View>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 15
    },
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'black'
    }
})
