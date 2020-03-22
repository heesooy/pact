import React, {Component, Fragment} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Text} from 'react-native';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoHeader from '../components/LogoHeader';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../config/theme';

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEmailChange(email) {
    this.setState({
      email,
    });
  }

  onSubmit() {
    this.setState({
      error: '',
    });

    // const { email } = this.state;
    // firebase.auth().sendPasswordResetEmail(email).then(() => {
    //   // Email sent.
    //   this.props.dispatch(loginSetMessage('A password reset email has been sent.'));
    //   this.props.navigation.navigate('Login');
    // }).catch((error) => {
    //   // An error happened.
    //   this.setState({
    //     error: error.code,
    //   });
    // });
  }

  onBackPress() {
    this.props.navigation.navigate('Login');
  }

  render() {
    const {email, error} = this.state;

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
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  color: PRIMARY_TEXT_COLOR,
                }}>
                Enter the email address that you used to sign up.
              </Text>
              <RoundSeparator />
              <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
                {error}
              </Text>
            </View>
            <View style={styles.footer}>
              <RoundButton
                mode="contained"
                title="Submit"
                onPress={this.onSubmit}
              />
              <RoundButton
                mode="outlined"
                title="Back"
                onPress={this.onBackPress}
              />
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

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

export default PasswordReset;
