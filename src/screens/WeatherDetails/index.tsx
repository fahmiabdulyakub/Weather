import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Config from 'react-native-config';
const WeatherDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textDate}>Tuesday, July 19, 2022</Text>
        <Text style={styles.textTime}>4:00 PM</Text>
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.textTemp}>32.1°C</Text>
        <Image
          source={{uri: Config.IMAGE_URL + '10d@2x.png'}}
          style={styles.image}
        />
      </View>
      <Text style={styles.main}>{'Clouds (few clouds)'}</Text>
      <View style={styles.tempMinMaxContainer}>
        <View>
          <Text style={styles.titleTempMinMax}>{'Temp (min)'}</Text>
          <Text style={styles.main}>32.1°C</Text>
        </View>
        <View>
          <Text style={styles.titleTempMinMax}>{'Temp (max)'}</Text>
          <Text style={styles.main}>33.1°C</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;
