import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components';

const UpdateProfile = () => {
    return (
        <View style={{flex: 1}}>
            <Header title="Update Profile" />
            <Gap height={25} />
            <View style={styles.content}>
           <Input label="Full Name" />
           <Gap height={5} />
           <Input label="Address" />
           <Gap height={5} />
           <Input label="Email" />
           <Gap height={15} />
           <Button text="Update" />
            </View>
         
        </View>
    )
}

export default UpdateProfile;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20
    }
})
