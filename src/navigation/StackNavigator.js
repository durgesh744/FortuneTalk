import React from 'react';
import Home from '../screen/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import Login from '../screen/Login/Login';
import Otp from '../screen/Otp/Otp';
import Register from '../screen/Register/Register';
import LocationSearch from '../screen/LocationSearch';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="splash" component={Splash} /> */}
      {/* <Stack.Screen name="login" component={Login} /> */}
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Otp" component={Otp} /> */}
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="locationSearch" component={LocationSearch} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
