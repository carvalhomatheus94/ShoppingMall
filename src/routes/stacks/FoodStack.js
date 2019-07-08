
import { createStackNavigator } from 'react-navigation';
import Food from '../../pages/Food';

export const FoodStackNavigator = createStackNavigator({
  Food: {
    screen: Food,
    navigationOptions: {
      header: null
    }
  }
})