import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { Searchbar, Subheading } from 'react-native-paper';
import { NavigationStackProp } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { BACKGROUND_COLOR } from '../config/theme';
import { User, FriendSuggestion } from '../lib/types';
import FriendRequestCard from '../components/FriendRequestCard';
import auth from '../lib/auth';
import FriendSuggestionCard from '../components/FriendSuggestionCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    padding: 15,
    // justifyContent: 'space-between',
  },
  headerRight: {
    marginRight: 20,
  },
  text: {
    marginVertical: 4,
    marginLeft: 4,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  currentlySearching: boolean;
  requests: User[];
  searchQuery: string;
  searchResults: User[];
  suggestions: FriendSuggestion[];
}

class AddFriends extends Component<Props> {
  state: State = {
    currentlySearching: false,
    requests: [],
    searchQuery: '',
    searchResults: [],
    suggestions: [],
  };

  async requestsFetch(): Promise<void> {
    const requests = await auth.getUserFriendRequests();

    if (!requests) {
      return;
    }
    this.setState({ requests });
  }

  async searchFetch(prefix: string): Promise<void> {
    const searchResults = await auth.getUserSearch(prefix);

    if (!searchResults) {
      return;
    }
    this.setState({ searchResults });
  }

  async suggestionsFetch(): Promise<void> {
    const suggestions = await auth.getFriendSuggestions();

    if (!suggestions) {
      return;
    }

    this.setState({ suggestions });
  }

  componentDidMount(): void {
    this.requestsFetch();
    this.suggestionsFetch();
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
      this.searchFetch(searchQuery);
      this.setState({ currentlySearching: true });
    } else {
      this.setState({ currentlySearching: false, searchResults: [] });
    }
  };

  doesRequestExist = (userId: string): boolean => (
    this.state.requests.some((request: User): boolean => request.userId === userId)
  );

  renderRequest = ({ item, index }: {item: User; index: number}): JSX.Element => (
    <FriendRequestCard
      accept={(): void => this.acceptRequest(item.userId)}
      decline={(): void => this.declineRequest(item.userId)}
      sendRequest={(): void => this.sendRequest(item.userId)}
      isExistingRequest={this.doesRequestExist(item.userId)}
      user={item}
    />
  );

  renderSuggestion = ({ item, index }: {item: FriendSuggestion; index: number}): JSX.Element => (
    <FriendSuggestionCard
      accept={(): void => this.acceptRequest(item.user.userId)}
      decline={(): void => this.declineRequest(item.user.userId)}
      sendRequest={(): void => this.sendRequest(item.user.userId)}
      isExistingRequest={this.doesRequestExist(item.user.userId)}
      suggestion={item}
    />
  );

  // TODO: FlatList should not be contained in a scroll view,
  // should use SectionList instead for multiple lists with titles
  render(): JSX.Element {
    return (
      <Fragment>
        <Searchbar
          placeholder='Search for users'
          onChangeText={this.onChangeSearch}
          value={this.state.searchQuery}
        />
        {this.state.currentlySearching
          && <FlatList
            contentContainerStyle={styles.container}
            data={this.state.searchResults}
            renderItem={this.renderRequest}
            keyExtractor={(item: User): string => item.userId}
          />
        }
        <ScrollView>
          {(this.state.requests && !this.state.currentlySearching)
            && <Fragment>
              <Subheading style={styles.text}>Friend Requests</Subheading>
              <FlatList
                contentContainerStyle={styles.container}
                data={this.state.requests}
                renderItem={this.renderRequest}
                scrollEnabled={false}
                keyExtractor={(item: User): string => item.userId}
              />
            </Fragment>
          }
          {(this.state.suggestions && !this.state.currentlySearching)
            && <Fragment>
              <Subheading style={styles.text}>Friend Suggestions</Subheading>
              <FlatList
                contentContainerStyle={styles.container}
                data={this.state.suggestions}
                renderItem={this.renderSuggestion}
                scrollEnabled={false}
                keyExtractor={(item: FriendSuggestion): string => item.user.userId}
              />
            </Fragment>
          }
        </ScrollView>
      </Fragment>
    );
  }
}

export default AddFriends;
