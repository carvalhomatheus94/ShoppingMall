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

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { colors } from '../styles';
import DrawerSidebar from '../component/DrawerSidebar';

import { HomeStackNavigator } from './stacks/HomeStack';
import { HappensStackNavigator } from './stacks/HappensStack';
import { MovieStackNavigator } from './stacks/MovieStack';
import { RecreationStackNavigator } from './stacks/RecreationStack';
import { StoresStackNavigator } from './stacks/StoresStack';
import { FoodStackNavigator } from './stacks/FoodStack';
import Home from '../pages/Home';

const TabBarMain = createBottomTabNavigator({
  HomeStackNavigator: {
    screen: HomeStackNavigator,
    navigationOptions: {
      tabBarLabel: 'INICIO',
      tabBarIcon: ({ focused, tintColor }) => (
        focused ? (
          <Icon name="home" size={20} color={colors.white} />
        ) : (
          <Icon name="home" size={20} color={colors.darker} />
        )
      ),
    },
  },
  HappensStackNavigator: {
    screen: HappensStackNavigator,
      navigationOptions: {
        tabBarLabel: 'ACONTECE',
        tabBarIcon: ({ focused, tintColor }) => (
          focused ? (
            <Icon name="thumbs-up" size={20} color={colors.white} />
          ) : (
            <Icon name="thumbs-up" size={20} color={colors.darker} />
          )
        ),
      },
  },
  MovieStackNavigator: {
    screen: MovieStackNavigator,
      navigationOptions: {
        tabBarLabel: 'CINEMA',
        tabBarIcon: ({ focused, tintColor }) => (
          focused ? (
            <Icon name="film" size={20} color={colors.white} />
          ) : (
            <Icon name="film" size={20} color={colors.darker} />
          )
        ),
      },
  },
  RecreationStackNavigator: {
    screen: RecreationStackNavigator,
      navigationOptions: {
        tabBarLabel: 'LAZER',
        tabBarIcon: ({ focused, tintColor }) => (
          focused ? (
            <Icon name="gamepad" size={20} color={colors.white} />
          ) : (
            <Icon name="gamepad" size={20} color={colors.darker} />
          )
        ),
      },
  },
  StoresStackNavigator: {
    screen: StoresStackNavigator,
      navigationOptions: {
        tabBarLabel: 'LOJAS',
        tabBarIcon: ({ focused, tintColor }) => (
          focused ? (
            <Icon name="store" size={20} color={colors.white} />
          ) : (
            <Icon name="store" size={20} color={colors.darker} />
          )
        ),
      },
  },
  // FoodStackNavigator: {
  //   screen: FoodStackNavigator,
  //     navigationOptions: {
  //       tabBarLabel: 'ALIMENTAÇÃO',
  //       tabBarIcon: ({ focused, tintColor }) => (
  //         focused ? (
  //           <Icon name="hamburger" size={20} color={colors.white} />
  //         ) : (
  //           <Icon name="hamburger" size={20} color={colors.darker} />
  //         )
  //       ),
  //     },
  // },
},
  {
    initialRouteName: 'HomeStackNavigator',
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: colors.white,
      inactiveTintColor: colors.darker,
      labelStyle: {
        fontSize: 10,
        paddingBottom: 15
      },
      style: {
        backgroundColor: colors.primary,
        borderTopColor: '#000',
        paddingTop: 12,
        height: 80,
        shadowOpacity: 0.75,
        paddingHorizontal: 15,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
    Splash: { screen: Splash },
    HomeStackNavigator: { screen: HomeStackNavigator },
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(createSwitchNavigator({ MainStack }));

export default Routes;
