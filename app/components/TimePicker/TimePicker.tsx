import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextboxLabel from '../TextboxLabel/TextboxLabel';
import RoundButton from '../RoundButton/RoundButton';

import styles from './styles';

type State = {
  /** whether the DateTimePicker is visible */
  isDateTimePickerVisible: boolean;
};

// https://www.npmjs.com/package/react-native-modal-datetime-picker
class TimePicker extends Component<{}, State> {
  state = {
    isDateTimePickerVisible: false,
  };

  showDateTimePicker = (): void => {
    this.setState({ isDateTimePickerVisible: true });
  }

  hideDateTimePicker = (): void => {
    this.setState({ isDateTimePickerVisible: false });
  }

  handleDatePicked = (date: Date): void => {
    this.hideDateTimePicker();
  };

  render(): JSX.Element {
    return (
      <>
        <TextboxLabel text="NOTIFICATION TIME" />
        <RoundButton
          mode="outlined"
          title="9:00 AM"
          onPress={this.showDateTimePicker}
          style={styles.outlineButton}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="time"
          is24Hour={false}
        />
      </>
    );
  }
}

export default TimePicker;
