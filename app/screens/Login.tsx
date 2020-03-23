import React, { Component, Fragment } from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { HelperText } from 'react-native-paper';
import userProfileExists from '../config/auth';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoHeader from '../components/LogoHeader';
import { PRIMARY_COLOR } from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // TODO: remove all hex values
    // TODO: no unnecessary magic numbers
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
  wrongPassword: {
    marginLeft: 15,
  },
  message: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  textbox: {
    marginBottom: 0,
  },
  invalidEmail: {
    marginLeft: 15,
  },
});

type Props = {
  /** navigation prop that is in all screens */
  navigation: NavigationStackProp<{}>;
}

type State = {
  /** user email */
  email?: string;
  /** user password */
  password?: string;
  /** any errors in the submission of a new profile */
  error?: string;
  /** message in the submission of a new profile */
  message?: string;
  /** whether the screen is loading */
  loading?: boolean;
}

class Login extends Component<Props, State> {
  state: State = {};

  onEmailChange = (email: string): void => {
    this.setState({ email });
  };

  onPasswordChange = (password: string): void => {
    this.setState({ password });
  };

  loginSuccess(user: Readonly<{}>): void {
    if (userProfileExists(user)) {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('CreateProfile');
    }
  }

  loginFail(error: string): void {
    // TODO: handle
    // dispatch({
    //   type: LOGIN_FAIL,
    //   payload: error.code,
    // });
  }

  onLoginPress = (): void => {
    // const { email, password } = this.state;

    // if (true) {
    this.loginSuccess({});
    // } else {
    // this.loginFail('Incorrect username/password.');
    // }
  };

  onSignupPress = (): void => {
    this.props.navigation.navigate('Signup', {
      email: this.state.email,
    });
  };

  onResetPassword = (): void => {
    this.props.navigation.navigate('PasswordReset');
  };

  renderMessage(): JSX.Element {
    const { message, loading } = this.state;
    const { error } = this.state;

    let errorText;

    if (loading) {
      errorText = 'Signing in...';
    } else {
      errorText = error === 'auth/user-not-found' ? 'User not found' : message;
    }

    const messageType = !loading && error ? 'error' : 'info';

    return (
      <View style={styles.message}>
        <HelperText type={messageType} visible={true}>
          {errorText}
        </HelperText>
      </View>
    );
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
                value={email}
                keyboardType="email-address"
                style={styles.textbox}
              />
              <HelperText
                type="error"
                visible={this.state.error === 'auth/invalid-email'}
                style={styles.invalidEmail}>
                Invalid Email
              </HelperText>
              <Textbox
                label="PASSWORD"
                secureTextEntry
                placeholder="Enter password"
                onChangeText={this.onPasswordChange}
                value={password}
                style={styles.textbox}
              />
              <HelperText
                type="error"
                visible={this.state.error === 'auth/wrong-password'}
                onPress={this.onResetPassword}
                style={styles.wrongPassword}>
                Forgot Password?
              </HelperText>
            </View>
            <View>
              {this.renderMessage()}
              <RoundSeparator />
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
