/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'native-base';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Halaman2 from './Halaman2';

class App extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Halaman2');
          }}
          title="Halaman 2 coba"
        />
      </View>
    );
  }
}

const Router = createStackNavigator(
  {
    App: {
      screen: App,
    },
    Halaman2: {
      screen: Halaman2,
    },
  },
  {initialRouteName: 'App'},
);

export default createAppContainer(Router);
