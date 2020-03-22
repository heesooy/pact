import React, {Component, Fragment} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Text} from 'react-native';
import userProfileExists from '../config/auth';
import {HelperText} from 'react-native-paper';
import PropTypes from 'prop-types';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoHeader from '../components/LogoHeader';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../config/theme';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onEmailChange = email => {
    this.setState({email});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  loginSuccess(user) {
    if (userProfileExists(user)) {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('CreateProfile');
    }
  }

  loginFail(error) {
    // TODO: handle
    // dispatch({
    //   type: LOGIN_FAIL,
    //   payload: error.code,
    // });
  }

  onLoginPress = () => {
    const {email, password} = this.state;

    if (true) {
      this.loginSuccess({});
    } else {
      this.loginFail('Incorrect username/password.');
    }
  };

  onSignupPress = () => {
    this.props.navigation.navigate('Signup', {
      email: this.state.email,
    });
  };

  onResetPassword = () => {
    this.props.navigation.navigate('PasswordReset');
  };

  renderMessage() {
    const {message, loading} = this.props;
    const {error} = this.state;

    let errorText;

    if (loading) {
      errorText = 'Signing in...';
    } else {
      errorText = error === 'auth/user-not-found' ? 'User not found' : message;
    }

    const messageType = !loading && error ? 'error' : 'info';

    return (
      <View style={{alignSelf: 'center', marginBottom: 10}}>
        <HelperText type={messageType} visible={true}>
          {errorText}
        </HelperText>
      </View>
    );
  }

  render() {
    const {email, password} = this.props;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={{flex: 0, backgroundColor: PRIMARY_COLOR}} />
        <SafeAreaView style={styles.safeArea}>
          <LogoHeader />
          <View style={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="EMAIL"
                placeholder="mail@address.com"
                onChangeText={this.onEmailChange}
                value={email}
                keyboardType="email-address"
                style={{marginBottom: 0}}
              />
              <HelperText
                type="error"
                visible={this.props.error === 'auth/invalid-email'}
                style={{marginLeft: 15}}>
                Invalid Email
              </HelperText>
              <Textbox
                label="PASSWORD"
                secureTextEntry
                placeholder="Enter password"
                onChangeText={this.onPasswordChange}
                value={password}
                style={{marginBottom: 0}}
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

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

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
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrongPassword: {
    marginLeft: 15,
  },
});

export default Login;
