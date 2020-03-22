import {StyleSheet} from 'react-native';

const circleSize = 30;
import {PRIMARY_COLOR} from '../../config/theme';

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
});
