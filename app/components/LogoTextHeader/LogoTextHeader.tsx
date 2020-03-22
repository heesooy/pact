import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import logo from '../../../assets/images/logo.png';

type Props = {
  /** text for the header */
  text: string;
}

const LogoTextHeader: React.FC<Props> = ({ text }) => (
  <View style={styles.container}>
    <View style={styles.arrange}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);

export default LogoTextHeader;
