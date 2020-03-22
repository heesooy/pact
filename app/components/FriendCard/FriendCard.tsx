import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import styles from './styles';

const FriendCard = ({onPress, title, subtitle, style, initials}) => {
  return (
    <Card
      onPress={onPress}
      style={[styles.container, style]}
      theme={{roundness: 0}}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={props => {
          return (
            //<Avatar.Icon {...props} color="#fff" icon="face" />
            <Avatar.Text color="#FFF" size={40} label={initials} />
          );
        }}
      />
    </Card>
  );
};

export default FriendCard;
