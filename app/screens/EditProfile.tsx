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
  /** navigation prop that is in all screens */
  navigation: NavigationStackProp<{}>;
}

type State = {
  /** first name of the user */
  firstName?: string;
  /** last name of the user */
  lastName?: string;
  /** username of the user */
  username?: string;
  /** any errors in the submission of a new profile */
  error?: string;
  /** message in the submission of a new profile */
  message?: string;
  /** whether the screen is loading */
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
