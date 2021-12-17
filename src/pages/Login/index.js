import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input, Loading } from '../../components';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm, storeData } from '../../utils';
import { getDatabase, ref, onValue } from "firebase/database";
import { Fire } from '../config';
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

const Login = ({navigation}) => {

    const [form, setForm] = useForm({email: '', password: ''});
    // const dispatch = useDispatch();

    
  const login = () => {
    // dispatch({type: 'SET_LOADING', value: true});
    
        Fire.auth()
          .signInWithEmailAndPassword(form.email, form.password)
          .then((res) => {
            // dispatch({type: 'SET_LOADING', value: false});
            setForm('reset');
    
            Fire.database()
              .ref(`users/${res.user.uid}/`)
              .once('value')
              .then((resDB) => {
                console.log('data user :', resDB.val());
                if (resDB.val()) {
                  storeData('user', resDB.val());
                  navigation.replace('MainApp');
                }
              });
    
            const data = {
              fullName: form.fullName,
              proffesion: form.proffesion,
              email: form.email,
              uid: res.user.uid,
            };
    
            storeData('user', data);
            navigation.navigate('MainApp', data);
            console.log('success:', res);
          })
          .catch((err) => {
            // dispatch({type: 'SET_LOADING', value: false});
            const errorMessage = err.message;
            showMessage({
              message: errorMessage,
              type: 'default',
              backgroundColor: 'red',
              color: 'white'
            });
          });
      };
    
 

     
    return (
      <View style={styles.container}>
      <ScrollView>
 
            <View>
                <View style={styles.header}>
                <Text style={styles.title}>LOGIN PAGE</Text>
                <Text style={styles.desc}>Login to your account.</Text>
                </View>
                <View style={styles.form}>
                  <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
                <Gap height={12} />
                <Input
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
                <Gap height={12} />
                <Button text="LOGIN" onPress={login}/>
                <Gap height={12} />
                </View>
            </View>
           
    
      </ScrollView>
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
