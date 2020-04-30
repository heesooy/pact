import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainerComponent } from 'react-navigation';
import AppContainer from './config/routes';
import { PRIMARY_COLOR } from './config/theme';
import NavigationService from './config/NavigationService';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: PRIMARY_COLOR,
  },
};

class App extends Component {
  render(): JSX.Element {
    console.disableYellowBox = true;
    return (
      <PaperProvider theme={theme}>
        <AppContainer
          ref={(navigatorRef: NavigationContainerComponent): void => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </PaperProvider>
    );
  }
}

export default App;
