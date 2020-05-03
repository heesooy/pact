import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import RoundButton from '../components/RoundButton';
import { BACKGROUND_COLOR } from '../config/theme';
import auth from '../lib/auth';

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
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  location?: string;
}

class Profile extends Component<Props, State> {
  state: State = {};

  profileFetch = async (): Promise<void> => {
    const info = await auth.getUserInfo();
    if (info) {
      this.setState({
        firstname: info.firstName,
        lastname: info.lastName,
        username: info.username,
        email: info.email,
        location: info.location,
      });
    }
  }

  signOutPressed = (): void => {
    this.props.navigation.navigate('Auth');
  }

  render(): JSX.Element {
    this.profileFetch();
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>
            Name: {this.state.firstname} {this.state.lastname}
          </Text>
          <Text style={styles.info}>
            Username: {this.state.username}
          </Text>
          <Text style={styles.info}>
            Email: {this.state.email}
          </Text>
          <Text style={styles.info}>
            Location: {this.state.location}
          </Text>
        </View>
        <View>
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
