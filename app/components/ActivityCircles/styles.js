import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../config/theme';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 15,
  },
});
