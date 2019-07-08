import { createStackNavigator } from 'react-navigation';
import Stores from '../../pages/Stores';

export const StoresStackNavigator = createStackNavigator({
  Stores: {
    screen: Stores,
    navigationOptions: {
      header: null
    }
  }
})