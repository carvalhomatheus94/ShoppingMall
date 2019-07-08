import { createStackNavigator } from 'react-navigation';
import Recreation from '../../pages/Recreation';

export const RecreationStackNavigator = createStackNavigator({
  Recreation: {
    screen: Recreation,
    navigationOptions: {
      header: null
    }
  }
})