import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';

import CommonRoot from '../shared/CommonRoot';
import {songStyles as styles} from '../styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SongScreen = ({navigation, route}) => {
  const song = route.params?.song;
  return (
    <CommonRoot>
      <ImageBackground
        style={styles.songImageContainer}
        source={{uri: song.artworkUrl100}}
      />
      <View style={styles.playerContainer}>
        <View style={styles.songDetailsContainer}>
          <Text adjustsFontSizeToFit={true} style={styles.trackNameText}>
            {song.trackName}
          </Text>
          <Text adjustsFontSizeToFit={true} style={styles.albumNameText}>
            {song.collectionName}
          </Text>
        </View>
        <View style={styles.controlsContainer}>
          <TouchableOpacity>
            <Image
              style={styles.controlButton}
              source={require('../../assets/images/previous.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.controlButton}
              source={require('../../assets/images/rewind.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.playButton}
              source={require('../../assets/images/play-button.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.controlButton}
              source={require('../../assets/images/fast-forward.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.controlButton}
              source={require('../../assets/images/next.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </CommonRoot>
  );
};

export default SongScreen;
