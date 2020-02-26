import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  Text
} from 'react-native';
// import AppContainer from './config/routes';
// import store from './config/store';
// import { PRIMARY_COLOR } from './config/theme';
// import NavigationService from './config/NavigationService';

class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(['Setting a timer']);
  }

  render() {
    return (
      <Text>hello world!</Text>
    );
  }
}

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: PRIMARY_COLOR,
//     accent: PRIMARY_COLOR,
//   },
// };

export default App;
