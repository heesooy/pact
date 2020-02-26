import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const FriendCard = ({
  onPress, title, subtitle, style, initials,
}) => {
  return (
    <Card onPress={onPress} style={[styles.container, style]} theme={theme}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => {
          return (
            //<Avatar.Icon {...props} color="#fff" icon="face" />
            <Avatar.Text color="#FFF" size={40} label={initials} />
          );
        }}
      />
    </Card>
  );
};

const theme = {
  // fonts: { regular: 'Arial' },
  roundness: 0,
};

const styles = StyleSheet.create({
  container: {
    //marginBottom: 15,
    //elevation: 0,
  },
});

export default FriendCard;
