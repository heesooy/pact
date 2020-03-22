import React from 'react';
import {
  FAB, Button, Dialog, Portal,
} from 'react-native-paper';
import { View } from 'react-native';
import Textbox from '../Textbox/Textbox';
import styles from './styles';

type Props = {
  /** function that is executed when textbox is changed */
  onChangeText: () => void;
}

type State = {
  /** whether the dialog is visible */
  visible: boolean;
}

class CheckinDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showDialog: (() => void) = () => this.setState({ visible: true });

  hideDialog: (() => void) = () => this.setState({ visible: false });

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
          <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
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
              <Button onPress={this.hideDialog} style={styles.button}>
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
