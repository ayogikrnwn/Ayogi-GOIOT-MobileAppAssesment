import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {AppLogos} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {

          setTimeout(() => {
          
              navigation.replace('Register');
    
          }, 3000);
       
    
        
      }, [navigation]);
    
    return (
        <View style={styles.container}>
         
            <Image source={AppLogos} style={styles.img} />
            <View style={styles.content}> 
             <Text style={styles.title}>My Houze</Text>
             <Text style={styles.desc}>House Management App</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.desc}>Developed By Ayogi Kurniawan</Text>
                <Text style={styles.desc}>For Assesment GoIOT.ID</Text>
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
  
    },
    img: {
        width: 147,
        height: 160,
     
    },
    content:{
        paddingTop: 25,
    },
    title:{
     fontSize: 18,
     textAlign: 'center',
     color: 'black',
     fontFamily: 'Roboto-Bold'

    },
    desc:{
        fontSize: 10,
        textAlign: 'center',
        color: 'black',
       
    },
    footer: {
        paddingTop: 20
    }
})
