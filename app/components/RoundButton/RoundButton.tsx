import React from 'react';
import { Button } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

type Props = {
  /** function that is executed when a child component is pressed */
  onPress: () => void;
  /** mode for the child button */
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  /** text for the child button */
  title: string;
  /** icon for the child button */
  icon?: string;
  /** optional styling for the component */
  style?: ViewStyle;
  /** optional content styling for the component */
  contentStyle?: ViewStyle;
  /** optional container styling for the component */
  containerStyle?: ViewStyle;
}

const RoundButton: React.FC<Props> = ({
  onPress,
  mode,
  title,
  icon,
  style,
  contentStyle,
  containerStyle,
}) => (
  <View style={[styles.container, containerStyle]}>
    <Button
      theme={{ roundness: 30 }}
      dark
      onPress={onPress}
      mode={mode}
      uppercase={false}
      style={[styles.button, style]}
      contentStyle={[styles.buttonContent, contentStyle]}
      icon={icon}>
      {title}
    </Button>
  </View>
);

export default RoundButton;
