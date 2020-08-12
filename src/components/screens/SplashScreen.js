import React, {useEffect} from 'react';
import {Image} from 'react-native';

import CommonRoot from '../shared/CommonRoot';
import {splashStyles as styles} from '../styles/styles';

const SplashScreen = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [props]);

  return (
    <CommonRoot>
      <Image
        style={styles.splashImage}
        source={require('../../assets/images/splash.png')}
      />
    </CommonRoot>
  );
};

export default SplashScreen;
