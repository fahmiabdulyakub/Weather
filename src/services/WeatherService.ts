import axios from 'axios';
import Config from 'react-native-config';

export const getData = (lan: number, lon: number) => {
  return new Promise(resolve => {
    axios
      .get(
        `${Config.BASE_URL}data/2.5/forecast?lat=${lan}&lon=${lon}&appid=${Config.API_KEY}`,
      )
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
