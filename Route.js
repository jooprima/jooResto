/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Homes from './Menu/Home/Homes';

const Router = createStackNavigator(
  {
    Home: {
      screen: Homes,
    },
  },
  {initialRouteName: 'Home'},
);

export default createAppContainer(Router);
