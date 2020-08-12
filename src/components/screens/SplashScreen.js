import React, {Component} from 'react';
import {Image} from 'react-native';

import CommonRoot from '../shared/CommonRoot';
import {splashStyles as styles} from '../styles/styles';

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
      <CommonRoot>
        <Image
          style={styles.splashImage}
          source={require('../../assets/images/splash.png')}
        />
      </CommonRoot>
    );
  }
}
