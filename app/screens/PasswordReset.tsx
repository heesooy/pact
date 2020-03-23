import React, { Component, Fragment } from 'react';
import {
  StyleSheet, View, SafeAreaView, StatusBar, Text,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoHeader from '../components/LogoHeader';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../config/theme';

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
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: PRIMARY_TEXT_COLOR,
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  email?: string;
  error?: string;
}

class PasswordReset extends Component<Props, State> {
  state: State = {};

  onEmailChange(email: string): void {
    this.setState({ email });
  }

  onSubmit(): void {
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

  onBackPress(): void {
    this.props.navigation.navigate('Login');
  }

  render(): JSX.Element {
    const { email, error } = this.state;

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
              />
            </View>
            <View>
              <Text
                style={styles.text}>
                Enter the email address that you used to sign up.
              </Text>
              <RoundSeparator />
              <Text style={styles.errorText}>
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

export default PasswordReset;
