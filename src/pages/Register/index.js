import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Gap, Input, Loading } from '../../components';
import { storeData, useForm } from '../../utils';
import { Fire } from '../config';



const Register = ({navigation}) => {

   
  const [loading, setLoading] = useState(false)
    const [form, setForm] = useForm({
    fullName: '',
    address: '',
    email: '',
    password: '',
    })

    const onContinue = () => {
        console.log(form);
    
        setLoading(true);
        Fire.auth()
          .createUserWithEmailAndPassword(form.email, form.password)
          .then((success) => {
            setLoading(false);
            setForm('reset');
    
            const data = {
              fullName: form.fullName,
              address: form.address,
              email: form.email,
              uid: success.user.uid
            }
            Fire.database()
              .ref('users/' + success.user.uid + '/')
              .set(data);
    
            storeData('user', data);
            navigation.navigate('Login', data);
            console.log('register success :', success);
          })
          .catch((error) => {
              console.log(error)
            const errorMessage = error.message;
            setLoading(false);
            showMessage({
              message: errorMessage,
              type: 'default',
              backgroundColor: 'red',
              color: 'white'
            });
          });
      };  
    

    return (
      <>
       <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
     
            <View style={styles.content}>
                <View style={styles.header}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.desc}>Register your account before
                    explore the house</Text>
                </View>
                <View style={styles.form}>
                <Input label="Full Name" value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}/>
                <Gap height={12} />
                <Input label="Address" value={form.address}
              onChangeText={(value) => setForm('address', value)}/>
                <Gap height={12} />
                <Input label="Email" value={form.email}
              onChangeText={(value) => setForm('email', value)}/>
                <Gap height={12} />
                <Input label="Password" value={form.password} secureTextEntry
              onChangeText={(value) => setForm('password', value)}/>
                <Gap height={12} />
                <Button text="Register" onPress={onContinue}/>
                <Gap height={12} />
                </View>
                <View style={styles.footer}>
                <Text>Already Have Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text>Login Now</Text>
                </TouchableOpacity>
                </View>
               
            </View>
            
       
      </ScrollView>
      </View>
              {loading && <Loading />}
              </>
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
