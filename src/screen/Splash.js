import {
  View,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import MyStatusBar from '../component/common/MyStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '../config/Screen';
import { Colors } from '../assets/style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {

  const navigate = async () => {
    let providerData = await AsyncStorage.getItem('user');
    let data = JSON.parse(providerData);
    if (data) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("login");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      navigate();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/gifs/splash.gif')}
          style={{ width: SCREEN_WIDTH * 0.65, height: SCREEN_WIDTH * 0.65 }}
        />
      </LinearGradient>
    </View>
  );
};

export default Splash

