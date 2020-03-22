import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import styles from './styles';

const LogoHeader = props => {
  const {style} = props;
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
};

export default LogoHeader;
