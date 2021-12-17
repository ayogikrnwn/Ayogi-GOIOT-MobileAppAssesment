import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { HouseMenuActive, ILHouseBdg, ILHouseDpk, PicHouseOne, PicHouseTwo } from '../../assets';
import { Card, Gap, Header } from '../../components';
import { getData } from '../../utils';
import { Fire } from '../config';



const HomePage = ({navigation}) => {
   
    const [house, setHouse] = useState([]);
    const [profile, setProfile] = useState({
        fullName: '',
       
      });

      useEffect(() => {
        getData('user').then((res) => {
          console.log('data user: ', res);
          const data = res;
          data.photo = {uri: res.photo};
          setProfile(res);
        });
      }, []);

      const date = moment()
      .utcOffset('+07:00')
      .format('DD-MMMM-YYYY');


    const getHouse = () => {
       Fire.database().ref(`house/`).on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setHouse(responselist)
            console.log(snapshot.val())
            // setLoading(true);
        });
        }
        
        useEffect(() => {
          getHouse();
        }, []);


    return (
        <View style={styles.container}>
            <Header date={date} greet="Hello,"  name={profile.fullName} />
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
                </View>
                <View style={{paddingHorizontal: 15}}>
                {house.map(item => {
            return (
              <Card
                key={`house-${item.id}`}
                name={item.name}
                address={item.address}
                img={ILHouseDpk}
                status={item.status}
                onPress={()=> navigation.navigate('HouseInfo', item)}
              />
            );
        })}
           
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
