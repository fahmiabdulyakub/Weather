import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Config from 'react-native-config';
import dayjs from 'dayjs';
import {getTemp} from 'utils/ConvertUtil';
import {Props} from './types';

const WeatherDetails = ({route}: Props) => {
  const {data} = route.params;
  const date = dayjs(data.dt_txt).format('dddd, MMMM D, YYYY');
  const time = dayjs(data.dt_txt).format('h:mm A');
  const icon = data.weather[0].icon;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textDate}>{date}</Text>
        <Text style={styles.textTime}>{time}</Text>
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.textTemp}>{getTemp(data.main.temp)}</Text>
        <Image
          source={{uri: Config.IMAGE_URL + icon + '@2x.png'}}
          style={styles.image}
        />
      </View>
      <Text style={styles.main}>
        {data.weather[0].main + ' (' + data.weather[0].description + ')'}
      </Text>
      <View style={styles.tempMinMaxContainer}>
        <View>
          <Text style={styles.titleTempMinMax}>{'Temp (min)'}</Text>
          <Text style={styles.main}>{getTemp(data.main.temp_min)}</Text>
        </View>
        <View>
          <Text style={styles.titleTempMinMax}>{'Temp (max)'}</Text>
          <Text style={styles.main}>{getTemp(data.main.temp_max)}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;
