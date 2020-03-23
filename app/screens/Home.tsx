import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BACKGROUND_COLOR } from '../config/theme';
import PactCard from '../components/PactCard';

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

type Pact = {
  name: string;
  description: string;
  pactId: string;
};

type State = {
  // should be prop?
  pacts?: [Pact];
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

  state: State = {};

  pactsFetch(): void {
    // const { currentUser } = firebase.auth();
    // const dbRef = firebase.database().ref();
    // dbRef.child('/user-pacts/' + currentUser.uid).on('value', (snapshot) => {
    //   if (!snapshot.exists()) {
    //     // User has no pacts
    //     dispatch({ type: PACTS_FETCH_SUCCESS, payload: null });
    //   } else {
    //     const pactIds = Object.keys(snapshot.val());
    //     // Pipelined fetch all pacts user belongs to
    //     Promise.all(
    //       pactIds.map(id => dbRef.child('/pacts/' + id).once('value')),
    //     ).then((dataSnapshot) => {
    //       const pacts = [];
    //       dataSnapshot.forEach((childSnapshot) => {
    //         const pactId = childSnapshot.key;
    //         const data = childSnapshot.val();
    //         data.pactId = pactId;
    //         pacts.push(data);
    //       });
    //       dispatch({ type: PACTS_FETCH_SUCCESS, payload: pacts });
    //     });
    //   }
    // });
  }

  pactUpdate(): void {
    // return {
    //   type: PACT_UPDATE,
    //   payload: {prop, value},
    // };
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
    // EditPact screen with no redux state passed in => Create Pact
    this.props.navigation.navigate('EditPact');
  };

  renderItem({ item, index }: {item: Pact; index: number}): JSX.Element {
    return (
      <PactCard
        onPress={(): void => this.pactPressed(index)}
        title={item.name}
        subtitle={item.description}
      />
    );
  }

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
