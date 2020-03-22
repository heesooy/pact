import React from 'react';
import { View, Text } from 'react-native';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
import styles from './styles';

const ActivityCircles = ({ onPress, style, label }) => (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{label}</Text>
      <View style={[styles.circles, style]}>
        <CircleIndicator text="S" onPress={onPress} checked />
        <CircleIndicator text="M" onPress={onPress} />
        <CircleIndicator text="T" onPress={onPress} checked />
        <CircleIndicator text="W" onPress={onPress} />
        <CircleIndicator text="T" onPress={onPress} />
        <CircleIndicator text="F" onPress={onPress} />
        <CircleIndicator text="S" onPress={onPress} active checked />
      </View>
    </View>
);

export default ActivityCircles;
