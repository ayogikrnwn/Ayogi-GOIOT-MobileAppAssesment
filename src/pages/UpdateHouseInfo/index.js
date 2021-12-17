import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';
import { getData, storeData } from '../../utils';
import {Fire} from '../config';
const UpdateHouseInfo = ({route, navigation}) => {
    const itemHouse = route.params;
    const [house, setHouse] = useState({
        name: '',
        address: '',
        electricBills: '',
        pdamBill: '',
        wifiBill: '',
       
      });
      
      useEffect(() => {
        getData('house').then(res => {
          const data = res;
          setHouse(data);
        });
      }, []);

    const updateHouseData = () => {
        const data = house;
       
        Fire.database()
          .ref(`house/${house.id}/`)
          .update(data)
          .then(() => {
            storeData('house', data)
              .then(() => {
                navigation.replace('MainApp');
              })
              .catch((err) => {
                showError('Terjadi Masalah');
                console.log(err);
              });
          })
          .catch(err => {
        
            console.log(err);
          });
      };

      const changeText = (key, value) => {
        setHouse({
          ...house,
          [key]: value,
        });
      };

    return (
      
        <View style={{flex: 1}}>
          <ScrollView>
          <Header title="Update House Info" />
            <Gap height={25} />
            <View style={styles.content}>
           <Input label="House Name" value={house.name} onChangeText={value => changeText('name', value)}/>
           <Gap height={5} />
           <Input label="Location House" value={house.address}  onChangeText={value => changeText('address', value)}/>
           <Gap height={5} />
           <Input label="Electricity Bills" value={house.electricBills}  onChangeText={value => changeText('electricBills',  parseInt(value))}/>
           <Gap height={5} />
           <Input label="PDAM Bills"  value={house.pdamBill}  onChangeText={value => changeText('pdamBill', parseInt(value))}/>
           <Gap height={5} />
           <Input label="WiFi Bills" value={house.wifiBill}  onChangeText={value => changeText('wifiBill', parseInt(value))}/>
           <Gap height={15} />
           <Button text="Update" onPress={updateHouseData}/>
            </View>
          </ScrollView>
           
         
        </View>
    )
}

export default UpdateHouseInfo;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    }
})
