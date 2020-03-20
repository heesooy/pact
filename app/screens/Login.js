import React, {Component, Fragment} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Text} from 'react-native';
import {HelperText} from 'react-native-paper';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoHeader from '../components/LogoHeader';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../config/theme';
import {
  loginEmailChanged,
  loginPasswordChanged,
  loginSubmit,
  loginSetMessage,
} from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
    this.onSignupPress = this.onSignupPress.bind(this);
    this.onResetPassword = this.onResetPassword.bind(this);
  }

  componentDidMount() {}

  onEmailChange(text) {
    this.props.loginEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.loginPasswordChanged(text);
  }

  onLoginPress() {
    const {email, password} = this.props;
    this.props.loginSubmit({email, password});
  }

  onSignupPress() {
    this.props.navigation.navigate('Signup', {
      email: this.props.email,
    });
  }

  onResetPassword() {
    this.props.navigation.navigate('PasswordReset');
  }

  renderPasswordMessage() {
    const {error} = this.props;

    return (
      <View>
        <HelperText
          type="error"
          visible={error === 'auth/wrong-password'}
          onPress={this.onResetPassword}
          style={{marginLeft: 15}}>
          Forgot Password?
        </HelperText>
      </View>
    );
  }

  renderMessage() {
    const {error, message, loading} = this.props;

    const text = () => {
      if (loading) {
        return 'Signing in...';
      }
      if (error === 'auth/user-not-found') {
        return 'User not found';
      }
      return message;
    };

    const type = () => {
      if (loading) {
        return 'info';
      }
      if (error) {
        return 'error';
      }
      return 'info';
    };

    return (
      <View style={{alignSelf: 'center', marginBottom: 10}}>
        <HelperText type={type()} visible={true}>
          {text()}
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
                visible={this.props.error === 'auth/wrong-password'}
                onPress={this.onResetPassword}
                style={{marginLeft: 15}}>
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
});

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    message: state.login.message,
    loading: state.login.loading,
  };
};

const mapDispatchToProps = {
  loginEmailChanged,
  loginPasswordChanged,
  loginSubmit,
  loginSetMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
