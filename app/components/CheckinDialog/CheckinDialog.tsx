import React from 'react';
import {
  FAB, Button, Dialog, Portal,
} from 'react-native-paper';
import { View } from 'react-native';
import Textbox from '../Textbox/Textbox';
import styles from './styles';

type Props = {
  onChangeText: () => void;
}

type State = {
  isVisible: boolean;
}

class CheckinDialog extends React.Component<Props, State> {
  state: State = {
    isVisible: false,
  };

  showDialog = (): void => {
    this.setState({ isVisible: true });
  }

  hideDialog = (): void => {
    this.setState({ isVisible: false });
  }

  saveCheckin = (): void => {
    // TODO create new pact activity
    this.setState({ isVisible: false });
  }

  render(): JSX.Element {
    return (
      <View>
        <FAB
          style={styles.fab}
          icon="check"
          label="CHECK IN"
          onPress={this.showDialog}
          color="#FFF"
        />
        <Portal>
          <Dialog visible={this.state.isVisible} onDismiss={this.hideDialog}>
            <Dialog.Title style={styles.dialog}>Check In</Dialog.Title>
            <Dialog.Content>
              <Textbox
                placeholder="Describe what you did for your pact today..."
                onChangeText={this.props.onChangeText}
                multiline
                maxLength={144}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.saveCheckin} style={styles.button}>
                Done
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

export default CheckinDialog;
