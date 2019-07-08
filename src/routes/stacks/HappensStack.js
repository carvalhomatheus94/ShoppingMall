
import { createStackNavigator } from 'react-navigation';
import Happens from '../../pages/Happens';

export const HappensStackNavigator = createStackNavigator({
  Happens: {
    screen: Happens,
    navigationOptions: {
      header: null
    }
  }
})