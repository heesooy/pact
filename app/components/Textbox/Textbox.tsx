import React from 'react';
import { TextInput } from 'react-native-paper';
import { ViewStyle, View } from 'react-native';
import TextboxLabel from '../TextboxLabel/TextboxLabel';
import styles from './styles';

type Props = {
  /** attribute for the child TextInput */
  secureTextEntry?: boolean | undefined;
  /** attribute for the child TextInput */
  placeholder?: string | undefined;
  /** attribute for the child TextInput */
  value?: string | undefined;
  /** attribute for the child TextInput */
  onChangeText?: (((text: string) => void) & Function) | undefined;
  /** optional label for the component */
  label?: string;
  /** attribute for the child TextInput */
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter' | 'web-search' | undefined;
  /** attribute for the child TextInput */
  autoCompleteType?: 'name' | 'username' | 'password' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-number' | 'email' | 'postal-code' | 'street-address' | 'tel' | 'off' | undefined;
  /** optional styling for the component */
  style?: ViewStyle;
  /** attribute for the child TextInput */
  multiline?: boolean | undefined;
  /** attribute for the child TextInput */
  maxLength?: number | undefined;
}

const Textbox: React.FC<Props> = ({
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
  label,
  keyboardType,
  autoCompleteType,
  style,
  multiline,
  maxLength,
}) => (
  <View style={[styles.container, style]}>
    <TextboxLabel text={label} />
    <TextInput
      theme={{ roundness: 30 }}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoCompleteType={autoCompleteType || 'off'}
      autoCapitalize="none"
      keyboardType={keyboardType}
      multiline={multiline}
      mode="outlined"
      maxLength={maxLength}
    />
  </View>
);

export default Textbox;
