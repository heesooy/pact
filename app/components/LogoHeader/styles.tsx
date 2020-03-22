import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../config/theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
    backgroundColor: PRIMARY_COLOR,
    elevation: 4,
    paddingTop: 30,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000',
    shadowOpacity: 0, // Removed shadow to make status bar and logo header continuous
  },
  logo: {
    height: 130,
    width: (562 / 720) * 130,
  },
});
