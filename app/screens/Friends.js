import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements';
import {BACKGROUND_COLOR} from '../config/theme';
import FriendCard from '../components/FriendCard';

class Friends extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <TouchableOpacity
          onPress={navigation.getParam('addPressed')}
          style={{marginRight: 20}}>
          <Icon name="add" type="material" color="#7E7E7E" />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.addPressed = this.addPressed.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({addPressed: this.addPressed});
  }

  addPressed() {
    const {navigation} = this.props;
    navigation.navigate('AddFriends');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FriendCard
          onPress={this.addPressed}
          title="Heesoo Yang"
          subtitle="m1necraferr256"
          initials="HY"
        />
      </ScrollView>
    );
  }
}

Friends.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
  },
});

export default Friends;
