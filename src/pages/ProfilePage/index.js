import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICUserProfile } from '../../assets';
import { Button, Gap, Header } from '../../components';
import { getData } from '../../utils';

const ProfilePage = ({navigation}) => {

    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        address: '',
      });

      useEffect(() => {
        getData('user').then((res) => {
          console.log('data user: ', res);
          const data = res;
          data.photo = {uri: res.photo};
          setProfile(res);
        });
      }, []);

      
    return (
        <View style={{flex: 1}}>
            <Header title="Profile"/>
            <View style={styles.content}>
          
                <View style={styles.wrap}>
                <ICUserProfile />
                <View style={styles.profiledesc}>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Gap height={5} />
                <Text style={styles.desc}>{profile.email}</Text>
                <Gap height={5} />
                <Text style={styles.desc}>{profile.address}</Text>
                </View>
                
                </View>
                <Gap height={15} />
                <Button text="Edit Profile" onPress={()=> navigation.navigate('UpdateProfile', profile)}/>
            
            </View>
           
        </View>
    )
}

export default ProfilePage;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    wrap: {
        flexDirection: 'row'
    },
    profiledesc: {
        paddingLeft: 10
    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'black'
    }
})
