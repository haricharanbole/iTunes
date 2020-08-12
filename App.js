import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './src/js/components/screens/SplashScreen';
import HomeScreen from './src/js/components/screens/HomeScreen';
import SongScreen from './src/js/components/screens/SongScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="song" component={SongScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
