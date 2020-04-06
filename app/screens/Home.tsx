import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BACKGROUND_COLOR } from '../config/theme';
import { Pact } from '../lib/types';
import PactCard from '../components/PactCard';
import auth from '../lib/auth';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  headerRight: {
    marginRight: 20,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
}

type State = {
  pacts: Pact[];
}

class Home extends Component<Props, State> {
  static navigationOptions = ({ navigation }: Props): {
    headerRight: () => JSX.Element;
    title: string;
  } => ({
    title: 'Your Pacts',
    headerRight: (): JSX.Element => (
      <TouchableOpacity
        onPress={navigation.getParam('addPressed')}
        style={styles.headerRight}>
        <Icon name="add" type="material" color="#7E7E7E" />
      </TouchableOpacity>
    ),
  });

  state: State = {
    pacts: [],
  };

  async pactsFetch(): Promise<void> {
    const pacts = await auth.getUserPacts();

    if (!pacts) {
      return;
    }

    this.setState({ pacts });
  }

  componentDidMount(): void {
    this.props.navigation.setParams({ addPressed: this.addPressed });
    this.pactsFetch();
  }

  pactPressed = (index: number): void => {
    // const {pacts} = this.props;

    // Load pact information to the 'Pact' screen
    // _.each(pacts[index], (value, prop) => {
    //   this.pactUpdate({prop, value});
    // });
    this.props.navigation.navigate('Pact');
  };

  addPressed = (): void => {
    // EditPact screen with no nav params => Create Pact
    this.props.navigation.navigate('EditPact');
  };

  renderItem = ({ item, index }: {item: Pact; index: number}): JSX.Element => (
    <PactCard
      onPress={(): void => this.pactPressed(index)}
      title={item.title}
      subtitle={item.description}
    />
  );

  render(): JSX.Element {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.pacts}
        renderItem={this.renderItem}
        keyExtractor={(item: Pact): string => item.pactId}
      />
    );
  }
}

export default Home;
