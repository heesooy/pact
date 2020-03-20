import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import styles from './styles';

const PactCard = ({onPress, title, subtitle, style}) => {
  return (
    <Card onPress={onPress} style={[styles.container, style]}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={props => {
          return <Avatar.Icon {...props} color="#fff" icon="star" />;
        }}
      />
    </Card>
  );
};

export default PactCard;
