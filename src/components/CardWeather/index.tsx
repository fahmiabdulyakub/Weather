import {Image, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import Config from 'react-native-config';

const CardWeather = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: Config.IMAGE_URL + '10d@2x.png'}}
        style={styles.icon}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.textDate}>Tue, Jul 19, 2022 4:00 PM</Text>
        <Text style={styles.textMain}>Clouds</Text>
        <Text style={styles.textTemp}>Temp: 32.1°C</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardWeather);
