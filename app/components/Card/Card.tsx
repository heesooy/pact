import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  /** child components to be placed in the Card */
  children: React.Component;
}

const Card: React.FC<Props> = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

export default Card;
