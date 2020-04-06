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
  navigation: NavigationStackProp<{}>;
}

type State = {
  uid?: string;
  firstName?: string;
  lastName?: string;
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

  signOutPressed = (): void => {
    this.props.navigation.navigate('Auth');
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
