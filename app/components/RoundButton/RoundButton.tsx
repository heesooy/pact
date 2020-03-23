import React from 'react';
import { Button } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

type Props = {
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  title: string;
  icon?: string;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
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
