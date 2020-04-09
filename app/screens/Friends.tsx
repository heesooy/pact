import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { withNavigationFocus } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { BACKGROUND_COLOR } from '../config/theme';
import { User } from '../lib/types';
import FriendCard from '../components/FriendCard';
import auth from '../lib/auth';

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
  navigation: NavigationStackProp<{}>;
  isFocused: boolean;
}

type State = {
  friends: User[];
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

  state: State = {
    friends: [],
  };

  async friendsFetch(): Promise<void> {
    const friends = await auth.getUserFriends();

    if (!friends) {
      return;
    }
    this.setState({ friends });
  }

  componentDidMount(): void {
    this.props.navigation.setParams({ addPressed: this.addPressed });
    this.friendsFetch();
  }

  componentDidUpdate(prevProps: Props): void {
    if (!prevProps.isFocused && this.props.isFocused) {
      this.friendsFetch();
    }
  }

  addPressed = (): void => {
    this.props.navigation.navigate('AddFriends');
  };

  renderItem = ({ item, index }: {item: User; index: number}): JSX.Element => (
    <FriendCard
      onPress={(): void => this.addPressed()}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.username}
      initials={`${item.firstName[0]}${item.lastName[0]}`}
    />
  );

  render(): JSX.Element {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.friends}
        renderItem={this.renderItem}
        keyExtractor={(item: User): string => item.userId}
      />
    );
  }
}

export default withNavigationFocus(Friends);
