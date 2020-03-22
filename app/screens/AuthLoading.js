import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import userProfileExists from '../config/auth';
import LogoHeader from '../components/LogoHeader';
import {PRIMARY_COLOR} from '../config/theme';

class AuthLoading extends Component {
  componentDidMount() {
    this.redirectAsync();
  }

  redirectAsync() {
    if (userProfileExists({})) {
      // TODO:
      // loginSuccess(this.props.dispatch, {});
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <Fragment>
        {/* For Android status bar */}
        <StatusBar backgroundColor={PRIMARY_COLOR} />
        {/* For iOS (doesn't support StatusBar--use SafeAreaView) */}
        <SafeAreaView style={{flex: 0, backgroundColor: PRIMARY_COLOR}} />
        <SafeAreaView style={styles.safeArea}>
          <LogoHeader />
          <View style={styles.container}>
            <ActivityIndicator size="large" style={styles.indicator} />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
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

export default AuthLoading;
