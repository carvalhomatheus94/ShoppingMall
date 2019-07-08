import { createStackNavigator } from 'react-navigation';
import Home from '../../pages/Home/index';

export const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
})