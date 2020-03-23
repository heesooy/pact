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
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

type Props = {
  /** navigation prop that is in all screens */
  navigation: NavigationStackProp<{}>;
}

type State = {
  uid?: string;
  /** first name of the user */
  firstName?: string;
  /** last name of the user */
  lastName?: string;
  /** username of the user */
  username?: string;
}

class Profile extends Component<Props, State> {
  state: State = {};

  profileFetch(/* uid?: string */): void {
    // return (dispatch) => {
    //   // firebase.database().ref('users').child(uid).on('value', (snapshot) => {
    //   //   dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    //   // });
    // };
  }

  componentDidMount(): void {
    this.profileFetch(/* this.state.uid */);
  }

  editPressed = (): void => {
    this.props.navigation.navigate('EditProfile');
  };

  signOutPressed(): void {
    // return (dispatch) => {
    //   // Display this message on the login page
    //   // firebase.auth().signOut();
    //   dispatch(loginSetMessage('You\'ve been signed out.'));
    //   NavigationService.navigate('Login');
    //   setTimeout(() => {
    //     dispatch({ type: PROFILE_SIGNOUT });
    //   }, 500);
    // };
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>
            Name: {this.state.firstName} {this.state.lastName}
          </Text>
          <Text style={styles.info}>Username: {this.state.username}</Text>
        </View>
        <View>
          <RoundButton
            mode="contained"
            title="Edit"
            onPress={this.editPressed}
          />
          <RoundButton
            mode="outlined"
            title="Sign Out"
            onPress={this.signOutPressed}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
