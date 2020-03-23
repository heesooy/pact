import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import { HelperText } from 'react-native-paper';
import { NavigationStackProp } from 'react-navigation-stack';
import Textbox from '../components/Textbox';
import RoundButton from '../components/RoundButton';
import RoundSeparator from '../components/RoundSeparator';
import LogoTextHeader from '../components/LogoTextHeader';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../config/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
  },
  footer: {},
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
  twoTextboxes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox: {
    height: 'auto',
    width: Dimensions.get('window').width * 0.4,
  },
  message: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: PRIMARY_TEXT_COLOR,
    paddingBottom: 15,
  },
  roundSep: {
    height: 4,
    marginTop: 15,
    marginBottom: 15,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  firstName?: string;
  lastName?: string;
  username?: string;
  error?: string;
  message?: string;
  loading?: boolean;
}

class CreateProfile extends Component<Props, State> {
  state: State = {};

  // TODO: use :)
  validateInput(
    { firstName, lastName, username }: { firstName: string; lastName: string; username: string },
  ): string | boolean {
    // Names can only contain alphabet characters and dashes
    const nameRegex = /^[a-z-]+$/i;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return 'name-format';
    }

    // Username must be between 4 and 15 characters long
    if (username.length < 4 || username.length > 15) {
      return 'username-length';
    }

    // Username must only contain alphanumeric characters and underscores
    const usernameRegex = /^\w+$/;
    if (!usernameRegex.test(username)) {
      return 'username-format';
    }

    return true;
  }

  onfirstNameChange = (firstName: string): void => {
    this.setState({ firstName });
  };

  onlastNameChange = (lastName: string): void => {
    this.setState({ lastName });
  };

  onUsernameChange = (username: string): void => {
    this.setState({ username });
  };

  onCreatePress = (): void => {
    this.props.navigation.navigate('Home');
  };

  renderMessage(): JSX.Element {
    const { error, message, loading } = this.state;

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
    const { firstName, lastName, username } = this.state;

    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />
        <SafeAreaView style={styles.secondSafeArea}>
          <LogoTextHeader text="Welcome!" />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.input}>
              <Text
                style={styles.text}>
                Just one last thing...
              </Text>
              <View style={styles.twoTextboxes}>
                <View style={styles.textbox}>
                  <Textbox
                    label="FIRST NAME"
                    placeholder="John"
                    onChangeText={this.onfirstNameChange}
                    value={firstName}
                  />
                </View>
                <View style={styles.textbox}>
                  <Textbox
                    label="LAST NAME"
                    placeholder="Doe"
                    onChangeText={this.onlastNameChange}
                    value={lastName}
                  />
                </View>
              </View>
              <Textbox
                label="USERNAME"
                placeholder="username"
                onChangeText={this.onUsernameChange}
                value={username}
              />
            </View>
            <View>{this.renderMessage()}</View>
            <View style={styles.footer}>
              <View style={styles.roundSep}>
                <RoundSeparator />
              </View>
              <RoundButton
                mode="contained"
                title="Create Profile"
                onPress={this.onCreatePress}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default CreateProfile;
