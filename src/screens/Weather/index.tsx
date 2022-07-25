import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';

const Weather = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherDetails')}>
        <Text>Weather</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Weather;
