import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICUserProfile } from '../../assets';
import { Button, Gap, Header } from '../../components';

const ProfilePage = () => {
    return (
        <View style={{flex: 1}}>
            <Header title="Profile"/>
            <View style={styles.content}>
          
                <View style={styles.wrap}>
                <ICUserProfile />
                <View style={styles.profiledesc}>
                <Text style={styles.name}>Ayogi Kurniawan</Text>
                <Gap height={5} />
                <Text style={styles.desc}>ayogikrnwn@gmail.com</Text>
                <Gap height={5} />
                <Text style={styles.desc}>Sumedang, West Java</Text>
                </View>
                
                </View>
                <Gap height={15} />
                <Button text="Edit Profile" />
            
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
