import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../components';

const Login = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                <Text style={styles.title}>LOGIN PAGE</Text>
                <Text style={styles.desc}>Login to your account.</Text>
                </View>
                <View style={styles.form}>
                <Input label="Email"/>
                <Gap height={12} />
                <Input label="Password"/>
                <Gap height={12} />
                <Button text="LOGIN"/>
                <Gap height={12} />
                </View>
            </View>
           
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: 'black'
    },
    desc: {
        fontFamily: 'Roboto-Regular',
        fontSize:14,
        color: 'black'
    },
    form: {
        paddingTop: 54
    },
   
})
