import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../config/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    width: 24,
    height: 4,
    borderRadius: 2,
    backgroundColor: PRIMARY_COLOR,
  },
});
