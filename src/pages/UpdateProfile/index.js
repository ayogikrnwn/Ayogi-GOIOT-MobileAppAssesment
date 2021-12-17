import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';
import { getData, storeData } from '../../utils';
import { Fire } from '../config';

const UpdateProfile = ({navigation, route}) => {
   
    const [profile, setProfile] = useState({
        fullName: '',
        address: '',
       email: '',

      });
      
      useEffect(() => {
        getData('user').then(res => {
          const data = res;
          setProfile(data);
        });
      }, []);

    const updateProfileData = () => {
        const data = profile;
        // data.photo = photoForDB;
        Fire.database()
        .ref(`users/${profile.uid}/`)
          .update(data)
          .then(() => {
            storeData('users', data)
              .then(() => {
                navigation.replace('MainApp');
              })
              .catch((err) => {
                // showError('Terjadi Masalah');
                console.log(err);
              });
          })
          .catch(err => {
            // showError(err.message);
            console.log(err);
          });
      };

      const changeText = (key, value) => {
        setProfile({
          ...profile,
          [key]: value,
        });
      };

    return (
        <View style={{flex: 1}}>
            <ScrollView>

            <Header title="Update Profile" />
            <Gap height={25} />
            <View style={styles.content}>
           <Input label="Full Name"  value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}/>
           <Gap height={5} />
           <Input label="Address"  value={profile.address}
            onChangeText={value => changeText('address', value)}/>
           <Gap height={5} />
           <Input label="Email"  value={profile.email}
            onChangeText={value => changeText('email', value)}/>
           <Gap height={15} />
           <Button text="Update" onPress={updateProfileData} />
            </View>
            </ScrollView>
           
         
        </View>
    )
}

export default UpdateProfile;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    }
})
