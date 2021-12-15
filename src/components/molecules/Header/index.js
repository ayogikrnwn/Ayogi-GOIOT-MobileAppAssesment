import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../..';

const Header = ({date, greet, name, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.date}>{date}</Text>
            <Gap height={7} />
            <View style={styles.greetings}>
            <Text style={styles.greet}>{greet}</Text>
            <Gap width={5} />
            <Text style={styles.name}>{name}</Text>
                <View style={{flex: 1}}>
                <Text style={styles.title}>{title}</Text>
                
                </View>
                
            
            </View>
            </View>
           
          
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 90,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: 'white',
      
    },
    content: {
        paddingLeft: 20,
        paddingTop: 10,
      
        flex: 1,
       
    },
    greetings: {
        flexDirection: 'row',
    },
    date: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'black'
    },
    greet: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: 'black'
    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: 'black'
    },
    title: {
textAlign : 'center',
fontFamily: 'Roboto-Bold',
        fontSize:24,
        color: 'black'
    }
})
