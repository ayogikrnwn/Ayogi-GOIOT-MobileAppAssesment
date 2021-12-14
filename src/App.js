/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';
import {SplashScreen} from './pages';
import {  Ruter } from './Router';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
   <NavigationContainer>
     <Ruter />
   </NavigationContainer>
  );
};


export default App;
