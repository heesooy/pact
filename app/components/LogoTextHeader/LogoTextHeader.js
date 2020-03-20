import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import styles from './styles';

const LogoTextHeader = props => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <View style={styles.arrange}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default LogoTextHeader;
