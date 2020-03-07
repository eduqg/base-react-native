import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Sign from '~/pages/Sign';

import Map from '~/pages/Map';

import Dashboard from '~/pages/Dashboard';

import {
  Bar,
  BarImage,
  BarButton,
  BarText,
  IconLeftButton,
  IconLeft,
} from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

const defaultOptions = (title, icon) => {
  return {
    tabBarVisible: true,
    tabBarLabel: title,
    tabBarLabelTintColor: '#D50004',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={icon} size={20} color={tintColor} />
    ),
    headerTransparent: false,
    headerTintColor: '#D50004',
    headerLeftContainerStyle: {
      marginLeft: 20,
    },
    headerStyle: {
      backgroundColor: '#e3e3e3',
    },
  };
};

const navigationOptions = navigation => {
  return {
    header: (
      <BarButton onPress={() => navigation.navigate('Dashboard')}>
        <BarImage source={headerlogo} />
        <BarText>Brasambev</BarText>
      </BarButton>
    ),
  };
};

const navigationOptionsBack = navigation => {
  return {
    header: (
      <Bar>
        <IconLeftButton onPress={() => navigation.navigate('Dashboard')}>
          <IconLeft name="chevron-left" size={30} />
        </IconLeftButton>
        <BarButton onPress={() => navigation.navigate('Dashboard')}>
          <BarImage source={headerlogo} />
          <BarText>Brasambev</BarText>
        </BarButton>
      </Bar>
    ),
  };
};

export default createAppContainer(
  createSwitchNavigator({
    Sign,
    App: createBottomTabNavigator(
      {
        Map: {
          screen: createStackNavigator(
            {
              Map,
            },
            {
              defaultNavigationOptions: ({ navigation }) =>
                navigationOptions(navigation),
            }
          ),
          navigationOptions: defaultOptions('Map', 'offline-pin'),
        },
        Dash: {
          screen: createStackNavigator({
            Dashboard: {
              screen: Dashboard,
              navigationOptions: ({ navigation }) =>
                navigationOptions(navigation),
            },
          }),
          navigationOptions: defaultOptions('Dashboard', 'help'),
        },
      },
      {
        resetOnBlur: true,
        tabBarOptions: {
          keyboardHidesTabBar: false,
          activeTintColor: '#D50004',
          inactiveTintColor: '#aaa',
          style: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            borderBottomColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            height: 80,
          },
        },
      }
    ),
  })
);
