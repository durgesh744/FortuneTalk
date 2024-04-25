import React from 'react';
import Home from '../screens/Home';
import Call from '../screens/Call';
import Chat from '../screens/Chat';
import Live from '../screens/Live';
import { Dimensions } from 'react-native';
import Courses from '../screens/Courses/Courses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../components/BottomTabs/CustomBottomTab';

const { width, height } = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

const BottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={'home3'}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{ headerShown: false, headerShadowVisible: false }}>
        <Tab.Screen name="live" component={Live} />
        <Tab.Screen name="chat" component={Chat} />
        <Tab.Screen name="home3" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="call" component={Call} />
        <Tab.Screen name="learn" component={Courses} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;