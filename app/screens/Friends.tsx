import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { BACKGROUND_COLOR } from '../config/theme';
import FriendCard from '../components/FriendCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerRight: {
    marginRight: 20,
  },
});

type Props = {
  /** navigation prop that is in all screens */
  navigation: NavigationStackProp<{}>;
}

class Friends extends Component<Props> {
  static navigationOptions = ({ navigation }: Props): { headerRight: () => JSX.Element } => ({
    headerRight: (): JSX.Element => (
      <TouchableOpacity
        onPress={navigation.getParam('addPressed')}
        style={styles.headerRight}>
        <Icon name="add" type="material" color="#7E7E7E" />
      </TouchableOpacity>
    ),
  });

  componentDidMount(): void {
    this.props.navigation.setParams({ addPressed: this.addPressed });
  }

  addPressed = (): void => {
    this.props.navigation.navigate('AddFriends');
  };

  render(): JSX.Element {
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

export default Friends;
