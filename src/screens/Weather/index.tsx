import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';
import {getData} from 'services';
import {Map} from 'constants/Map';
import {CardWeather, FooterPagination} from 'components';
import {useState} from 'react';
import {ListEntityType, WeatherType} from 'types/globalType';
import dayjs from 'dayjs';

const Weather = () => {
  const [weather, setWeather] = useState<WeatherType>();
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  useEffect(() => {
    setIsLoading(true);
    getData(Map.latitude, Map.longitude).then((result: any) => {
      setWeather(result);
      setIsLoading(false);
    });
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    getData(Map.latitude, Map.longitude).then((result: any) => {
      setWeather(result);
      setRefresh(false);
    });
  };

  const renderCard = (item: ListEntityType) => {
    const dateTime = dayjs(item.dt_txt).format('ddd, MMM D, YYYY h:mm A');
    return (
      <CardWeather
        dateTime={dateTime}
        icon={item?.weather[0].icon}
        onPress={() => navigation.navigate('WeatherDetails')}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherDetails')}>
        <FlatList
          refreshing={refresh}
          onRefresh={onRefresh}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={weather?.list}
          renderItem={({item}) => renderCard(item)}
          ListFooterComponent={<FooterPagination isLoading={isLoading} />}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Weather;
