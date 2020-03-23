import React from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import styles from './styles';

type Props = {
  onPress: () => void;
  title: string;
  subtitle: string;
  style?: ViewStyle;
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
