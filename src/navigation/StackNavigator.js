import React from 'react';
import Home from '../screen/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import Login from '../screen/Login/Login';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}>

      <Stack.Screen name="splash" component={Splash} />
      {/* <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
