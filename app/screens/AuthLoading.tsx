import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import userProfileExists from '../config/auth';
import LogoHeader from '../components/LogoHeader';
import { PRIMARY_COLOR } from '../config/theme';

const styles = StyleSheet.create({
  firstSafeArea: {
    flex: 0,
    backgroundColor: PRIMARY_COLOR,
  },
  secondSafeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  indicator: {
    paddingTop: 50,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

class AuthLoading extends Component<Props> {
  componentDidMount(): void {
    this.redirectAsync();
  }

  redirectAsync(): void {
    if (userProfileExists({})) {
      // TODO
      // loginSuccess(this.props.dispatch, {});
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render(): JSX.Element {
    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={styles.firstSafeArea} />
        <SafeAreaView style={styles.secondSafeArea}>
          <LogoHeader />
          <View style={styles.container}>
            <ActivityIndicator size="large" style={styles.indicator} />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default AuthLoading;
