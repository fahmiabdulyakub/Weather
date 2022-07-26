import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    top: hp(2),
    alignItems: 'center',
  },
  textDate: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: Colors.black,
  },
  textTime: {
    fontSize: hp(2.5),
    color: Colors.black,
  },
  tempContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  textTemp: {
    fontSize: hp(5),
    fontWeight: '400',
    color: Colors.black,
  },
  image: {
    width: wp(40),
    height: wp(40),
  },
  main: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  tempMinMaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(10),
  },
  titleTempMinMax: {
    fontSize: hp(1.8),
    color: Colors.black,
    textAlign: 'center',
  },
});

export default styles;
