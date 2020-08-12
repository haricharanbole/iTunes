import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import styles from './styles/AppHeaderStyles';

const AppLogo = require('../../assets/images/HomeScreen/CompanyLogo.png');
const ProfileBackground = require('../../assets/images/HomeScreen/ProfileBackground.png');
const ProfilePicture = require('../../assets/images/HomeScreen/Profile.png');

export default function AppHeader(props) {
  return (
    <View style={[{flex: props.headerFlex}, styles.rootContainer]}>
      <View style={styles.logoContainer}>
        <Image source={AppLogo} style={styles.AppLogo} />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileInnerContainer}>
          <ImageBackground
            source={ProfileBackground}
            style={styles.ProfileBackground}>
            <Image source={ProfilePicture} style={styles.profilePicture} />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}
