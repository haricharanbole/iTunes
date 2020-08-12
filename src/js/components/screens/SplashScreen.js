import React, {Component} from 'react';
import {StatusBar, SafeAreaView, View, Image} from 'react-native';
import styles from './styles/styles';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 2000);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.rootContainer}>
            <Image
              style={styles.splashImage}
              source={require('../../../assets/images/splash.png')}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
