import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import logo from '../../../assets/images/logo.png';

const LogoHeader: React.FC = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={logo}
    />
  </View>
);

export default LogoHeader;
