import { StackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/home';

const MainNavigator = createBottomTabNavigator(
  {
    home: Home
  },
  {
    initialRouteName: 'home'
    // tabBarOptions: {
    //   activeBackgroundColor: '#1b2e2e'
    // }
  }
);

export default MainNavigator;
