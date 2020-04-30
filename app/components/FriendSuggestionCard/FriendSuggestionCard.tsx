import React, { Fragment } from 'react';
import { ViewStyle } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Paragraph,
} from 'react-native-paper';
import styles from './styles';
import { FriendSuggestion } from '../../lib/types';

type Props = {
  accept: () => void;
  decline: () => void;
  sendRequest: () => void;
  isExistingRequest: boolean;
  suggestion: FriendSuggestion;
  style?: ViewStyle;
}

const FriendSuggestionCard: React.FC<Props> = ({
  accept, decline, sendRequest, isExistingRequest, suggestion, style,
}) => (
  <Card
    style={[styles.container, style]}
    theme={{ roundness: 0 }}>
    <Card.Title
      title={`${suggestion.user.firstName} ${suggestion.user.lastName}`}
      subtitle={suggestion.user.username}
      left={(): JSX.Element => (
        // <Avatar.Icon {...props} color="#fff" icon="face" />
        <Avatar.Text color="#FFF" size={40} label={`${suggestion.user.firstName[0]}${suggestion.user.lastName[0]}`} />
      )}
    />
    <Card.Content>
      {suggestion.mutual > 0 && <Paragraph>{suggestion.mutual} mutual friends</Paragraph>}
      {suggestion.common !== '' && <Paragraph>Common pact tag: {suggestion.common}</Paragraph>}
    </Card.Content>
    <Card.Actions>
      {isExistingRequest
        && <Fragment>
          <Button onPress={accept}>
            Accept
          </Button>
          <Button onPress={decline}>
            Decline
          </Button>
        </Fragment>
      }
      {!isExistingRequest
        && <Button onPress={sendRequest}>
          Send Request
        </Button>
      }
    </Card.Actions>
  </Card>
);

export default FriendSuggestionCard;
