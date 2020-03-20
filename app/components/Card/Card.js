import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Card = ({children}) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export default Card;
