import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

type Props = {
  checked?: boolean;
  active?: boolean;
}

const CircleIndicator: React.FC<Props> = ({ checked, active }) => {
  let opacity = 0.35;

  if (!checked) {
    opacity = 0;
  }

  if (active) {
    opacity = 1;
  }

  const borderOpacity = active ? 1 : 0.35;

  const checkedStyle = StyleSheet.create({
    circle: {
      backgroundColor: `rgba(83, 199, 190,${opacity})`,
      borderColor: `rgba(83, 199, 190,${borderOpacity})`,
    },
  });

  return (
    <View style={[styles.circle, checkedStyle.circle]}>
      <Icon name="check" color="#FFF" style={styles.icon} />
    </View>
  );
};

export default CircleIndicator;
