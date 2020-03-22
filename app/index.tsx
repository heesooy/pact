import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './config/routes';
import { PRIMARY_COLOR } from './config/theme';
import NavigationService from './config/NavigationService';

class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(['Setting a timer']);
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </PaperProvider>
    );
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: PRIMARY_COLOR,
  },
};

export default App;
