import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Register,
  SplashScreen,
 
} from '../../pages';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../../components';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Doctor" component={Doctor} />

//       <Tab.Screen name="Messages" component={Messages} />

//       <Tab.Screen name="Hospitals" component={Hospitals} />
//     </Tab.Navigator>
//   );
// }

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
 
    </Stack.Navigator>
  );
};

export default Router;