import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { HelperText } from 'react-native-paper';
import auth from '../lib/auth';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import LogoHeader from '../components/LogoHeader';
import { PRIMARY_COLOR } from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingLeft: 30,
    paddingRight: 30,
  },
  scroll: {
    flex: 1,
  },
  footer: {
    marginTop: 15,
  },
  input: {
    marginTop: 20,
  },
  firstSafeArea: {
    flex: 0,
    backgroundColor: PRIMARY_COLOR,
  },
  secondSafeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  confirmPass: {
    marginBottom: 0,
  },
  roundSep: {
    height: 4,
    marginTop: 5,
    marginBottom: 15,
  },
  centerAlign: {
    alignSelf: 'center',
  },
  invalidPassword: {
    marginLeft: 15,
    fontSize: 16,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  location: string;
  error?: string;
}

class Signup extends Component<Props, State> {
  state: State = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    location: '',
  };

  onFirstNameChange = (firstname: string): void => {
    this.setState({ firstname });
  };

  onLastNameChange = (lastname: string): void => {
    this.setState({ lastname });
  };

  onUsernameChange = (username: string): void => {
    this.setState({ username });
  };

  onEmailChange = (email: string): void => {
    this.setState({ email });
  };

  onPasswordChange = (password: string): void => {
    this.setState({ password });
  };

  onPasswordConfirmChange = (passwordConfirmation: string): void => {
    this.setState({ passwordConfirmation });
  };

  onLocationChange = (location: string): void => {
    this.setState({ location });
  };

  resetError = (): void => {
    this.setState({ error: undefined });
  }

  // TODO password must match with confirmation and be 8 characters
  onSignupPress = async (): Promise<void> => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      passwordConfirmation,
      location,
    } = this.state;
    if (password === passwordConfirmation && password.length >= 8) {
      const isValidRegister = await auth.registerAttempt(firstname, lastname, username, email, password, location);
      if (isValidRegister) {
        this.props.navigation.navigate('Login');
      } else {
        this.setState({ error: '' }); // TODO support error messages from API
      }
    } else {
      this.setState({ error: '' }); // TODO support error messages from API
    }
  };

  onBackPress = (): void => {
    this.props.navigation.navigate('Login');
  };

  render(): JSX.Element {
    const { firstname, lastname, username, email, password, passwordConfirmation, location } = this.state;
    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />

        <SafeAreaView style={styles.secondSafeArea}>
          <LogoHeader />
          <View style={styles.container}>
            <ScrollView style={styles.scroll}>
              <View style={styles.input}>
                <Textbox
                  label="FIRST NAME"
                  placeholder="First"
                  onChangeText={this.onFirstNameChange}
                  value={firstname}
                />

                <Textbox
                  label="LAST NAME"
                  placeholder="Last"
                  onChangeText={this.onLastNameChange}
                  value={lastname}
                />

                <Textbox
                  label="USERNAME"
                  placeholder="Username"
                  onChangeText={this.onUsernameChange}
                  value={username}
                />

                <Textbox
                  label="EMAIL"
                  placeholder="mail@address.com"
                  onChangeText={this.onEmailChange}
                  keyboardType="email-address"
                  value={email}
                />

                <Textbox
                  label="PASSWORD"
                  secureTextEntry
                  placeholder="Use 6 or more characters"
                  onChangeText={this.onPasswordChange}
                  value={password}
                  onFocus={this.resetError}
                />

                <Textbox
                  label="CONFIRM PASSWORD"
                  secureTextEntry
                  placeholder="Re-enter password"
                  onChangeText={this.onPasswordConfirmChange}
                  value={passwordConfirmation}
                  onFocus={this.resetError}
                />

                <Textbox
                  label="LOCATION"
                  placeholder="Location"
                  onChangeText={this.onLocationChange}
                  value={location}
                />

                <HelperText
                  type="error"
                  visible={this.state.error !== undefined}
                  style={styles.invalidPassword}>
                  Invalid password or password does not match.
                </HelperText>

              </View>

              <View style={styles.footer}>
                <RoundButton
                  mode="contained"
                  title="Sign Up"
                  onPress={this.onSignupPress}
                />

                <RoundButton
                  mode="outlined"
                  title="Back"
                  onPress={this.onBackPress}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Signup;
