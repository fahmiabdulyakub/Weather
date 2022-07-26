import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';
import {getData} from 'services';
import {Map} from 'constants/Map';
import {CardWeather} from 'components';

const Weather = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  useEffect(() => {
    // getData(Map.latitude, Map.longitude).then(result => {
    //   console.log(result);
    // });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherDetails')}>
        <CardWeather onPress={() => navigation.navigate('WeatherDetails')} />
      </TouchableOpacity>
    </View>
  );
};

export default Weather;
