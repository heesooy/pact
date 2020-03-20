import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../config/theme';

export default StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: PRIMARY_COLOR,
    elevation: 4,
    paddingTop: 20,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000',
    shadowOpacity: 0, // Removed shadow to make status bar and logo header continuous
  },
  arrange: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: (562 / 720) * 100,
  },
  text: {
    marginLeft: 20,
    fontSize: 50,
    color: '#fff',
    // fontFamily: 'OctagenRoman',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
});
