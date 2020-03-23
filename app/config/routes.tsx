import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Pact from '../screens/Pact';
import EditPact from '../screens/EditPact';
import Friends from '../screens/Friends';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import AddFriends from '../screens/AddFriends';
import AuthLoading from '../screens/AuthLoading';
import CreateProfile from '../screens/CreateProfile';
import PasswordReset from '../screens/PasswordReset';
import { PRIMARY_COLOR } from './theme';

/* LogIn Page Navigation Properties */
const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Log In',
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        title: 'Sign Up',
      },
    },
    PasswordReset: {
      screen: PasswordReset,
      navigationOptions: {
        title: 'Reset Password',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

/* Home Page Navigation Properties */
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Pact: {
    screen: Pact,
  },
  EditPact: {
    screen: EditPact,
  },
});

HomeStack.navigationOptions = (
  { navigation }: { navigation: NavigationScreenProp<NavigationRoute<string>, string>},
): { tabBarVisible: boolean } => {
  let tabBarVisible = true;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.forEach((route) => {
      if (route.routeName === 'EditPact') {
        tabBarVisible = false;
      }
    });
  }

  return {
    tabBarVisible,
  };
};

/* Friends Page Navigation Properties */
const FriendsStack = createStackNavigator({
  Friends: {
    screen: Friends,
    navigationOptions: {
      title: 'Friends',
    },
  },
  AddFriends: {
    screen: AddFriends,
    navigationOptions: {
      title: 'Add Friends',
    },
  },
});

/* Profile Page Navigation Properties */
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    },
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: 'Edit Profile',
    },
  },
});

ProfileStack.navigationOptions = (
  { navigation }: { navigation: NavigationScreenProp<NavigationRoute<string>, string>},
): { tabBarVisible: boolean } => {
  let tabBarVisible = true;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.forEach((route) => {
      if (route.routeName === 'EditProfile') {
        tabBarVisible = false;
      }
    });
  }

  return {
    tabBarVisible,
  };
};

/* Navigation Bar Properties */
const HomeTabBarIcon = ({ tintColor }: { tintColor: string }): JSX.Element => <Icon name="home" color={tintColor} />;
const FriendsTabBarIcon = ({ tintColor }: { tintColor: string }): JSX.Element => <Icon name="people" color={tintColor} />;
const ProfileTabBarIcon = ({ tintColor }: { tintColor: string }): JSX.Element => <Icon name="account-circle" color={tintColor} />;

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: HomeTabBarIcon,
      },
    },
    Friends: {
      screen: FriendsStack,
      navigationOptions: {
        tabBarLabel: 'Friends',
        tabBarIcon: FriendsTabBarIcon,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ProfileTabBarIcon,
      },
    },
  },
  {
    lazy: false,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: PRIMARY_COLOR,
      },
    },
  },
);

/* Root Navigator */
const Root = createAnimatedSwitchNavigator(
  {
    AuthLoading,
    Auth: LoginStack,
    Main: TabNavigator,
    CreateProfile,
  },
  {
    transition:
      Platform.OS === 'ios' ? (
        <Transition.Together>
          <Transition.Out type="fade" interpolation="linear" durationMs={300} />
        </Transition.Together>
      ) : (
        <Transition.Together>
          <Transition.Out type="fade" interpolation="linear" durationMs={0} />
        </Transition.Together>
      ),
  },
);

const AppContainer = createAppContainer(Root);
export default AppContainer;
