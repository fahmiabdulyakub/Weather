import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingLeft: wp(5),
    borderBottomWidth: 2,
    borderBottomColor: Colors.light_grey,
    paddingVertical: hp(2),
  },
  icon: {
    width: wp(5),
    height: wp(5),
  },
});

export default styles;
