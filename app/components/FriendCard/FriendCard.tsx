import React from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import styles from './styles';

type Props = {
  /** function that is executed when a child component is pressed */
  onPress: () => void;
  /** name of friend on the card */
  title: string;
  /** username of friend on the card */
  subtitle: string;
  /** optional styling for the component */
  style?: ViewStyle;
  /** intials of friend on the card */
  initials: string;
}

const FriendCard: React.FC<Props> = ({
  onPress, title, subtitle, style, initials,
}) => (
  <Card
    onPress={onPress}
    style={[styles.container, style]}
    theme={{ roundness: 0 }}>
    <Card.Title
      title={title}
      subtitle={subtitle}
      left={(): JSX.Element => (
        // <Avatar.Icon {...props} color="#fff" icon="face" />
        <Avatar.Text color="#FFF" size={40} label={initials} />
      )}
    />
  </Card>
);

export default FriendCard;
