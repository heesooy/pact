import React from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import styles from './styles';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  subtitle: string;
}

const PactCard: React.FC<Props> = ({
  onPress, title, subtitle, style,
}) => (
  <Card onPress={onPress} style={[styles.container, style]}>
    <Card.Title
      title={title}
      subtitle={subtitle}
      left={(props): JSX.Element => <Avatar.Icon {...props} color="#fff" icon="star" />}
    />
  </Card>
);

export default PactCard;
