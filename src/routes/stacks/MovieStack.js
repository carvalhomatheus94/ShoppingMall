import { createStackNavigator } from 'react-navigation';
import Movie from '../../pages/Movie';

export const MovieStackNavigator = createStackNavigator({
  Movie: {
    screen: Movie,
    navigationOptions: {
      header: null
    }
  }
})