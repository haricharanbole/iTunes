import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import {commonStyles as styles} from '../styles/styles';

const CommonRoot = (props) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.rootContainer}>{props.children}</View>
      </SafeAreaView>
    </>
  );
};

export default CommonRoot;
