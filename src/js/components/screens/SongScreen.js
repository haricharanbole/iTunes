/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const fullHeight = hp('100%');
const fullWidth = wp('100%');
const tabList = ['Popular', 'Recent', 'Most Played'];

const SongScreen = ({navigation, route}) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.rootContainer}>
          <View style={styles.headerContainer}>
            <Text>{route.params?.song.trackCensoredName}</Text>
          </View>
          <View style={styles.listContainer}></View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    width: fullWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 0.05,
    width: fullWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 0.9,
    width: fullWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SongScreen;
