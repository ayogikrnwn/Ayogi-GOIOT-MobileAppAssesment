import React from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={'black'} />
      <Text style={styles.text}>Loading..</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: 'green',
    fontFamily: 'Roboto-Bold',
    marginTop: 16,
  },
})