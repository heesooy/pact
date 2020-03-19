import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import RoundButton from '../components/RoundButton';
import { BACKGROUND_COLOR } from '../config/theme';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.savePressed = this.savePressed.bind(this);
  }

  componentDidMount() {

  }

  savePressed() {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is the Edit Profile page!</Text>
        <RoundButton mode="contained" title="Save Changes" onPress={this.savePressed} />
      </View>
    );
  }
}

EditProfile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
});

export default EditProfile;
