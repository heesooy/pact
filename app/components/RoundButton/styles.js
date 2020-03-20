import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../config/theme';

export default StyleSheet.create({
  container: {
    // marginLeft: 40,
    // marginRight: 40,
    marginBottom: 20,
  },
  buttonContent: {
    height: 52,
  },
  button: {
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    elevation: 0,
  },
});
