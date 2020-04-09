import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationStackProp } from 'react-navigation-stack';
import { BACKGROUND_COLOR } from '../config/theme';
import { User } from '../lib/types';
import FriendRequestCard from '../components/FriendRequestCard';
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
}

type State = {
  currentlySearching: boolean;
  requests: User[];
  searchQuery: string;
  suggestions: User[];
}

class AddFriends extends Component<Props> {
  state: State = {
    currentlySearching: false,
    requests: [],
    searchQuery: '',
    suggestions: [],
  };

  async requestsFetch(): Promise<void> {
    const requests = await auth.getUserFriendRequests();
    console.log(requests);

    if (!requests) {
      return;
    }
    this.setState({ requests });
  }

  async suggestionsFetch(prefix: string): Promise<void> {
    const suggestions = await auth.getUserSuggestions(prefix);
    console.log(suggestions);

    if (!suggestions) {
      return;
    }
    this.setState({ suggestions });
  }

  componentDidMount(): void {
    this.requestsFetch();
  }

  acceptRequest = (userId: string): void => {
    auth.acceptFriendRequest(userId)
      .then((data) => this.requestsFetch());
  };

  declineRequest = (userId: string): void => {
    auth.declineFriendRequest(userId)
      .then((data) => this.requestsFetch());
  };

  sendRequest = (userId: string): void => {
    auth.sendFriendRequest(userId)
      .then((data) => this.requestsFetch());
  };

  onChangeSearch = (searchQuery: string): void => {
    this.setState({ searchQuery });
    if (searchQuery.length > 0) {
      this.suggestionsFetch(searchQuery);
      this.setState({ currentlySearching: true });
    } else {
      this.setState({ currentlySearching: false });
    }
  };

  renderItem = ({ item, index }: {item: User; index: number}): JSX.Element => (
    <FriendRequestCard
      accept={(): void => this.acceptRequest(item.userId)}
      decline={(): void => this.declineRequest(item.userId)}
      sendRequest={(): void => this.sendRequest(item.userId)}
      isExistingRequest={this.state.currentlySearching}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.username}
      initials={`${item.firstName[0]}${item.lastName[0]}`}
    />
  );

  render(): JSX.Element {
    return (
      <Fragment>
        <Searchbar
          placeholder='Search for users'
          onChangeText={this.onChangeSearch}
          value={this.state.searchQuery}
        />
        <FlatList
          contentContainerStyle={styles.container}
          data={this.state.currentlySearching ? this.state.suggestions : this.state.requests}
          renderItem={this.renderItem}
          keyExtractor={(item: User): string => item.userId}
        />
      </Fragment>
    );
  }
}

export default AddFriends;
