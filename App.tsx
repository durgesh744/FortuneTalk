import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
