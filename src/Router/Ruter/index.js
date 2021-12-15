import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DebitMethod,
  DonePayment,
  HomePage,
  HouseInfo,
  Login,
  Payment,
  ProfilePage,
  QrisMethod,
  Register,
  SplashScreen,
  TransferMethod,
  UpdateHouseInfo,
  UpdateProfile
 
} from '../../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="House" component={HomePage}  options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfilePage}  options={{headerShown: false}}/>

     
    </Tab.Navigator>
  );
}

const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
          <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
            <Stack.Screen
        name="HouseInfo"
        component={HouseInfo}
        options={{headerShown: false}}
      />
           <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="DebitMethod"
        component={DebitMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferMethod"
        component={TransferMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateHouseInfo"
        component={UpdateHouseInfo}
        options={{headerShown: false}}
      />
       
       <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Ruter;