import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import RoundButton from '../components/RoundButton';
import { BACKGROUND_COLOR } from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  firstName?: string;
  lastName?: string;
  username?: string;
  error?: string;
  message?: string;
  loading?: boolean;
}

class EditProfile extends Component<Props, State> {
  savePressed = (): void => {
    this.props.navigation.navigate('Profile');
  };

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>This is the Edit Profile page!</Text>
        <RoundButton
          mode="contained"
          title="Save Changes"
          onPress={this.savePressed}
        />
      </View>
    );
  }
}

export default EditProfile;
