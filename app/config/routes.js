/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/home';
import Favorite from '../screens/favorite';

import HomeImage from '../static/images/home.png';
import Heart from '../static/images/heart.png';

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={HomeImage}
              style={{ width: 25, height: 25, tintColor: tintColor }}
            />
          );
        }
      }
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={Heart}
              style={{ width: 25, height: 25, tintColor: tintColor }}
            />
          );
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      //showLabel: false, // hide labels
      inactiveTintColor: '#8F8F8F', // active icon color
      activeTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: '#1b252e' // TabBar background
      }
    }
  }
);

export default MainNavigator;
