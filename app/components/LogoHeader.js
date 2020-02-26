import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const LogoHeader = (props) => {
  const { style } = props;
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 562 / 720 * 130,
  },
});


export default LogoHeader;
