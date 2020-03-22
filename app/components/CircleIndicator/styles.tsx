import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../config/theme';

const circleSize = 30;

export default StyleSheet.create({
  circle: {
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: PRIMARY_COLOR,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    elevation: 0,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  icon: {
    opacity: 1,
  },
});
