import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const CardSection = ({children}) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export default CardSection;
