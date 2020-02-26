import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  StyleSheet,
  View,
} from 'react-native';
import { PRIMARY_COLOR } from '../config/theme';

const PactCard = ({
  onPress, title, subtitle, style,
}) => {
  return (
    <Card onPress={onPress} style={[styles.container, style]}>
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => {
          return (
            <Avatar.Icon {...props} color="#fff" icon="star" />
          );
        }}
      />
    </Card>
  );
};

const theme = {
  // fonts: { regular: 'Arial' },
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default PactCard;
