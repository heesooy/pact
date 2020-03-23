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
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoTextHeader from '../components/LogoTextHeader';
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
});

type Props = {
  /** navigation prop that is in all screens */
  navigation: NavigationStackProp<{}>;
  email: string;
}

type State = {
  /** user email */
  email?: string;
  /** user password */
  password?: string;
  passwordConfirmation?: string;
  /** any errors in the submission of a new profile */
  error?: string;
  /** message in the submission of a new profile */
  message?: string;
  /** whether the screen is loading */
  loading?: boolean;
}

class Signup extends Component<Props, State> {
  mounted: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.mounted = false;

    const loginEmail = this.props.navigation.getParam('email', '');
    if (loginEmail !== '') {
      this.onEmailChange(loginEmail);
    }
  }

  componentDidMount(): void {
    this.mounted = true;
  }

  componentWillUnmount(): void {
    this.mounted = false;
  }

  onEmailChange = (email: string): void => {
    if (this.mounted) {
      this.setState({ email });
    }
  };

  onPasswordChange = (password: string): void => {
    this.setState({ password });
  };

  onPasswordConfirmChange = (passwordConfirmation: string): void => {
    this.setState({ passwordConfirmation });
  };

  signupSuccess(): void {
    // dispatch({ type: SIGNUP_SUCCESS });

    // Display this message on the login page
    // dispatch(loginSetMessage('Please verify your email.'));
    this.props.navigation.navigate('Login');
  }

  signupFail(): void {
    // dispatch({
    //   type: SIGNUP_FAIL,
    //   payload: error.code,
    // });
  }

  // TODO: password must match with confirmation
  onSignupPress = (): void => {
    // const {email, password, passwordConfirmation} = this.state;
    // return (dispatch) => {
    //   dispatch({ type: SIGNUP_SUBMIT });
    //   if (password !== passwordConfirm) {
    //     signupFail(dispatch, { code: 'password-match' });
    //     return;
    //   }
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     firebase.auth().currentUser.sendEmailVerification()
    //       .then(() => {
    //         firebase.auth().signOut();
    //         signupSuccess(dispatch);
    //       })
    //       .catch((error) => {
    //         signupFail(dispatch, error);
    //       });
    //   })
    //   .catch((error) => {
    //     signupFail(dispatch, error);
    //   });
    // };
  };

  onBackPress = (): void => {
    this.props.navigation.navigate('Login');
  };

  renderMessage(): JSX.Element {
    const { error, loading } = this.state;

    const text = (): string | undefined => {
      if (loading) {
        return 'Signing in...';
      }
      if (error === 'auth/user-not-found') {
        return 'User not found';
      }
      if (error === 'auth/invalid-email') {
        return 'Invalid Email';
      }
      if (error === 'auth/wrong-password') {
        return 'Wrong Password';
      }
      if (error === 'auth/weak-password') {
        return 'Please use a stronger password';
      }
      if (error === 'password-match') {
        return 'Passwords do not match';
      }
      return error;
    };

    const type = (): string => {
      if (loading) {
        return 'info';
      }
      if (error) {
        return 'error';
      }
      return 'info';
    };

    return (
      <View style={styles.centerAlign}>
        <HelperText type={type()} visible={true}>
          {text()}
        </HelperText>
      </View>
    );
  }

  render(): JSX.Element {
    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />
        <SafeAreaView style={styles.secondSafeArea}>
          <LogoTextHeader text="join pact" />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="EMAIL"
                placeholder="mail@address.com"
                onChangeText={this.onEmailChange}
                value={this.props.email}
                keyboardType="email-address"
              />
              <Textbox
                label="PASSWORD"
                // secureTextEntry
                placeholder="Use 6 or more characters"
                onChangeText={this.onPasswordChange}
              />
              <Textbox
                label="CONFIRM PASSWORD"
                // secureTextEntry
                placeholder="Re-enter password"
                onChangeText={this.onPasswordConfirmChange}
                style={styles.confirmPass}
              />
            </View>
            <View style={styles.roundSep}>
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
                title="Back"
                onPress={this.onBackPress}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Signup;
