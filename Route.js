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
import Masakan from './Menu/Masakan/Masakan';

const Router = createStackNavigator(
  {
    Homes: {
      screen: Homes,
    },
    Masakan: {
      screen: Masakan,
    },
  },
  {initialRouteName: 'Homes'},
);

export default createAppContainer(Router);
