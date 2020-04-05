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
  navigation: NavigationStackProp<{}>;
}

type State = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  error?: string;
}

class Signup extends Component<Props, State> {
  onEmailChange = (email: string): void => {
    this.setState({ email });
  };

  onPasswordChange = (password: string): void => {
    this.setState({ password });
  };

  onPasswordConfirmChange = (passwordConfirmation: string): void => {
    this.setState({ passwordConfirmation });
  };

  // TODO password must match with confirmation and be 8 characters
  onSignupPress = (): void => {
    // const {email, password, passwordConfirmation} = this.state;
    // this.props.navigation.navigate('Home');
  };

  onBackPress = (): void => {
    this.props.navigation.navigate('Login');
  };

  render(): JSX.Element {
    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />

        <SafeAreaView style={styles.secondSafeArea}>
          <LogoHeader />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Textbox
                label="EMAIL"
                placeholder="mail@address.com"
                onChangeText={this.onEmailChange}
                keyboardType="email-address"
              />

              <Textbox
                label="PASSWORD"
                placeholder="Use 6 or more characters"
                onChangeText={this.onPasswordChange}
              />

              <Textbox
                label="CONFIRM PASSWORD"
                placeholder="Re-enter password"
                onChangeText={this.onPasswordConfirmChange}
                style={styles.confirmPass}
              />
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
