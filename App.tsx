//@ts-nocheck
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {SocketProvider} from './src/context/socket';
import {AuthProvider} from './src/context/AuthContext';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AuthProvider>
          <NavigationContainer>
            <SocketProvider>
              <StackNavigator />
            </SocketProvider>
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
