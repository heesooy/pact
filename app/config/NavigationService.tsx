// NavigationService.js
import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

let navigator: NavigationContainerComponent;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent): void {
  navigator = navigatorRef;
}

function navigate(routeName: string, params: Record<string, string | Function>): void {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};
