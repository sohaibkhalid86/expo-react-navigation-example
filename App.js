import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Second: SecondScreen,
  },
});

const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeStack,
    Categories: CategoriesScreen,
    Cart: CartScreen,
    Account: AccountScreen,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Main',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
    headerTintColor: 'white',
    headerTitleStyle: { fontWeight: 'bold' },
  },
  screens: {
    Main: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}