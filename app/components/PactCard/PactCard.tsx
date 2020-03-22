import React from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import styles from './styles';

type Props = {
  /** function that is executed when the card is pressed */
  onPress: () => void;
  /** optional styling for the component */
  style?: ViewStyle;
  /** title for the child card */
  title: string;
  /** subtitle for the child card */
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
