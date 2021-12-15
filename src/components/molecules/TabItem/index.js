import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { HouseMenuActive, HouseMenuDeactive, ProfileMenuActive, ProfileMenuDeactive } from '../../../assets';


const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title == 'House') {
      return active ? <HouseMenuActive /> : <HouseMenuDeactive/>;
    }
    if (title == 'Profile') {
      return active ? <ProfileMenuActive /> : <ProfileMenuDeactive />;
    }
   
    return <HouseMenuActive />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 14,
    color: active ? '#1FF48E' : 'white',
    fontFamily: 'Roboto-Regular',
    marginTop: 4,
  }),
})