import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const tabList = ['Popular', 'Recent', 'Most Played'];
const fullHeight = hp('100%');
const fullWidth = wp('100%');

export const commonStyles = StyleSheet.create({
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
});

export const splashStyles = StyleSheet.create({
  splashImage: {
    width: fullWidth * 0.8,
    resizeMode: 'contain',
  },
});

export const homeStyles = StyleSheet.create({
  ...commonStyles,
  headerText: {
    fontSize: fullHeight * 0.02,
  },
  tabContainer: {
    flex: 0.075,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    width: fullWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 0.875,
    width: fullWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemContainer: {
    height: '100%',
    width: fullWidth / tabList.length,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemContainer1: {
    height: '99%',
    width: fullWidth / tabList.length,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemContainer2: {
    height: '1%',
    width: fullWidth / tabList.length,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: fullHeight * 0.02,
  },
  itemContainer: {
    flexDirection: 'row',
    height: fullHeight * 0.1,
    width: fullWidth,
    borderBottomWidth: fullHeight * 0.0005,
    alignItems: 'center',
  },
  itemImageContainer: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
  },
  itemImage: {
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemDetailsContainer: {
    height: '80%',
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: fullWidth * 0.02,
    borderBottomColor: 'grey',
  },
  itemDurationContainer: {
    height: '80%',
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  itemMainText: {
    color: 'black',
    fontSize: fullHeight * 0.0175,
    fontWeight: 'bold',
  },
  itemSubText: {
    color: 'grey',
    fontSize: fullHeight * 0.015,
  },
  itemDurationText: {
    color: 'grey',
    fontSize: fullHeight * 0.015,
  },
});

export const songStyles = StyleSheet.create({
  songImageContainer: {
    flex: 0.5,
    width: fullWidth,
  },
  playerContainer: {
    flex: 0.5,
    width: fullWidth,
  },
  songDetailsContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackNameText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: fullHeight * 0.03,
  },
  albumNameText: {color: 'grey', fontSize: fullHeight * 0.02},
  controlsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controlButton: {
    height: fullHeight * 0.05,
    width: fullHeight * 0.05,
  },
  playButton: {
    height: fullHeight * 0.075,
    width: fullHeight * 0.075,
  },
});
