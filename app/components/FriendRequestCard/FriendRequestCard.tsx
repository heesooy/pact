import React, { Fragment } from 'react';
import { ViewStyle } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import styles from './styles';

type Props = {
  accept: () => void;
  decline: () => void;
  sendRequest: () => void;
  isExistingRequest: boolean;
  title: string;
  subtitle: string;
  style?: ViewStyle;
  initials: string;
}

const FriendRequestCard: React.FC<Props> = ({
  accept, decline, sendRequest, isExistingRequest, title, subtitle, style, initials,
}) => (
  <Card
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
    <Card.Actions>
      {!isExistingRequest
        && <Fragment>
          <Button onPress={accept}>
            Accept
          </Button>
          <Button onPress={decline}>
            Decline
          </Button>
        </Fragment>
      }
      {isExistingRequest
        && <Button onPress={sendRequest}>
          Send Request
        </Button>
      }
    </Card.Actions>
  </Card>
);

export default FriendRequestCard;
