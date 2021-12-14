import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Gap, Input } from '../../components';

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.desc}>Register your account before
                    explore the house</Text>
                </View>
                <View style={styles.form}>
                <Input label="Full Name"/>
                <Gap height={12} />
                <Input label="Address"/>
                <Gap height={12} />
                <Input label="Email"/>
                <Gap height={12} />
                <Input label="Password"/>
                <Gap height={12} />
                <Button text="Register"/>
                <Gap height={12} />
                </View>
                <View style={styles.footer}>
                <Text>Already Have Account?</Text>
                <TouchableOpacity>
                    <Text>Login Now</Text>
                </TouchableOpacity>
                </View>
               
            </View>
            
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
      
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
        paddingTop: 20
    },
    footer: {
        alignItems: 'center'
    }
})
