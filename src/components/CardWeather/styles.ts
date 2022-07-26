import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingLeft: wp(3),
    borderBottomWidth: 2,
    borderBottomColor: Colors.light_grey,
    paddingVertical: hp(2),
    flexDirection: 'row',
  },
  icon: {
    width: wp(20),
    height: wp(20),
  },
  descriptionContainer: {
    left: wp(2),
  },
  textDate: {
    color: Colors.black,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  textMain: {
    color: Colors.black,
    fontSize: hp(2),
  },
  textTemp: {
    color: Colors.black,
    fontSize: hp(1.5),
  },
});

export default styles;
