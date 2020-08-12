import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const colors = {
  background: '#0087FA',
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    width: wp('100%'),
    backgroundColor: colors.background,
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  profileContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  profileInnerContainer: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  AppLogo: {
    height: '60%',
    resizeMode: 'contain',
  },
  ProfileBackground: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePicture: {
    height: '75%',
    width: '60%',
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});

export default styles;
