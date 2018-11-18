import { StackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../screens/home';

const MainNavigator = createBottomTabNavigator(
  {
    home: Home
  },
  {
    initialRouteName: 'home',
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: '#2EC4B6',
      inactiveTintColor: '#666',
      labelStyle: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10
      },
      tabBarIcon: ({ focused }) => {
        return <Icon name='home' size={25} />;
      }
    }
  }
);
export default MainNavigator;