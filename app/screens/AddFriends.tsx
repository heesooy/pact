import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BACKGROUND_COLOR} from '../config/theme';

const AddFriends = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>This is the Add Friends page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default AddFriends;
