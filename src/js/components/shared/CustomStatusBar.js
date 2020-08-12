import React from 'react';
import {StatusBar} from 'react-native';

export default function CustomStatusBar(props) {
  return (
    <StatusBar
      barStyle={props.barStyle}
      backgroundColor={props.backgroundColor}
      translucent={props.isTranscluent}
      hidden={props.isHidden}
    />
  );
}
