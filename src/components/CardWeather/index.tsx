import {Image, Text, View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import Config from 'react-native-config';

const CardWeather = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: Config.IMAGE_URL + '10d@2x.png'}}
        style={styles.icon}
      />
    </View>
  );
};

export default memo(CardWeather);
