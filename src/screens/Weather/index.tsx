import {FlatList, View} from 'react-native';
import React, {useEffect, memo} from 'react';
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

  const renderCard = (data: ListEntityType) => {
    const dateTime = dayjs(data.dt_txt).format('ddd, MMM D, YYYY h:mm A');
    const temp = data.main.temp.toString();
    return (
      <CardWeather
        dateTime={dateTime}
        icon={data?.weather[0].icon}
        main={data?.weather[0].main}
        temp={temp.substring(0, 4)}
        onPress={() => navigation.navigate('WeatherDetails', {data})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        maxToRenderPerBatch={10}
        refreshing={refresh}
        onRefresh={onRefresh}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={weather?.list}
        renderItem={({item}) => renderCard(item)}
        ListFooterComponent={<FooterPagination isLoading={isLoading} />}
      />
    </View>
  );
};

export default memo(Weather);
