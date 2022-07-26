import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import Config from 'react-native-config';
import {PropsType} from './types';

const CardWeather = ({onPress, dateTime, icon, main, temp}: PropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: Config.IMAGE_URL + icon + '@2x.png'}}
        style={styles.icon}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.textDate}>{dateTime}</Text>
        <Text style={styles.textMain}>{main}</Text>
        <Text style={styles.textTemp}>{'Temp: ' + temp + '°C'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardWeather);
