import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import {HelperText} from 'react-native-paper';
import PropTypes from 'prop-types';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoTextHeader from '../components/LogoTextHeader';
import {PRIMARY_COLOR} from '../config/theme';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const loginEmail = this.props.navigation.getParam('email', '');
    if (loginEmail !== '') {
      this.onEmailChange(loginEmail);
    }
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  onEmailChange = email => {
    if (this._mounted) {
      this.setState({email});
    }
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPasswordConfirmChange = passwordConfirmation => {
    this.setState({passwordConfirmation});
  };

  signupSuccess(dispatch) {
    // dispatch({ type: SIGNUP_SUCCESS });

    // Display this message on the login page
    // dispatch(loginSetMessage('Please verify your email.'));
    this.props.navigation.navigate('Login');
  }

  signupFail(dispatch, error) {
    // dispatch({
    //   type: SIGNUP_FAIL,
    //   payload: error.code,
    // });
  }

  // TODO: password must match with confirmation
  onSignupPress = () => {
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

  onBackPress = () => {
    this.props.navigation.navigate('Login');
  };

  renderMessage() {
    const {error, message, loading} = this.props;

    const text = () => {
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
      <View style={{alignSelf: 'center'}}>
        <HelperText type={type()} visible={true}>
          {text()}
        </HelperText>
      </View>
    );
  }

  render() {
    const {email} = this.props;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={{flex: 0, backgroundColor: PRIMARY_COLOR}} />
        <SafeAreaView style={styles.safeArea}>
          <LogoTextHeader text="join pact" />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="EMAIL"
                placeholder="mail@address.com"
                onChangeText={this.onEmailChange}
                value={email}
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
                style={{marginBottom: 0}}
              />
            </View>
            <View style={{height: 4, marginTop: 5, marginBottom: 15}}>
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

Signup.propTypes = {
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

export default Signup;
