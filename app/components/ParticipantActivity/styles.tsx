import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../config/theme';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 18,
  },
});
