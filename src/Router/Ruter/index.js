import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomePage,
  Login,
  Register,
  SplashScreen
 
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

const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
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
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
 
    </Stack.Navigator>
  );
};

export default Ruter;