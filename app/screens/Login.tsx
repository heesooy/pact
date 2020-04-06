import React, { Component, Fragment } from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar,
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
  invalidEmail: {
    marginLeft: 15,
    fontSize: 16,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  email: string;
  password: string;
  error?: string;
}

class Login extends Component<Props, State> {
  state: State = {
    email: '',
    password: '',
  };

  onEmailChange = (email: string): void => {
    this.setState({ email });
  };

  onPasswordChange = (password: string): void => {
    this.setState({ password });
  };

  onLoginPress = async (): Promise<void> => {
    const { email, password } = this.state;

    const isValidLogin = await auth.loginAttempt(email, password);

    if (isValidLogin) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({ error: '' }); // TODO support error messages from API
    }
  };

  onSignupPress = (): void => {
    this.props.navigation.navigate('Signup');
  };

  resetError = (): void => {
    this.setState({ error: undefined });
  }

  render(): JSX.Element {
    const { email, password } = this.state;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />

        <SafeAreaView style={styles.secondSafeArea}>
          <LogoHeader />
          <View style={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="EMAIL"
                placeholder="mail@address.com"
                onChangeText={this.onEmailChange}
                onFocus={this.resetError}
                value={email}
                keyboardType="email-address"
              />

              <Textbox
                label="PASSWORD"
                secureTextEntry
                placeholder="Enter password"
                onChangeText={this.onPasswordChange}
                value={password}
                onFocus={this.resetError}
              />

              <HelperText
                type="error"
                visible={this.state.error !== undefined}
                style={styles.invalidEmail}>
                Invalid email address or password.
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
                title="Log In"
                onPress={this.onLoginPress}
              />
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Login;
