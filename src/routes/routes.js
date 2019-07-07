import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Register from '../pages/Register';
// import Home from '../pages/Home';
import { HomeStackNavigator } from './stacks/HomeStack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors } from '../styles';
import DrawerSidebar from '../component/DrawerSidebar';

const TabBarMain = createBottomTabNavigator({
  HomeStackNavigator: {
    screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({ focused, tintColor }) => (
          focused ? (
            <Icon name="home" size={30} color={colors.white} />
          ) : (
            <Icon name="home" size={30} color={colors.darker} />
          )
        ),
      },
  },
},
  {
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: colors.white,
      inactiveTintColor: colors.darker,
      labelStyle: {
        fontSize: 8,
      },
      style: {
        backgroundColor: colors.background,
        borderTopColor: '#000',
        fontSize: 13,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
      },
    },
  }
);

const MainDrawer = createDrawerNavigator({
  TabBarMain: { screen: TabBarMain },
},
  {
    drawerPosition: 'left',
    contentComponent: props => (
      <DrawerSidebar {...props} />
    ),
  }
);


const MainStack = createStackNavigator(
  {
    MainDrawer: { screen: MainDrawer },
    TabBarMain: { screen: TabBarMain },
    Register: { screen: Register },
    Login: { screen: Login },
    Splash: { screen: Splash }
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(createSwitchNavigator({ MainStack }));

export default Routes;
