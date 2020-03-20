import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../config/theme';

const circleSize = 40;

export default StyleSheet.create({
  circle: {
    margin: 0,
    backgroundColor: PRIMARY_COLOR,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});
