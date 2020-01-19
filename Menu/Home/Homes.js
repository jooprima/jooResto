import React, {Component} from 'react';
import {View, Text} from 'native-base';
import Footers from '../Footers.js';

export default class Homes extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Halaman Home</Text>
        </View>
        <Footers />
      </View>
    );
  }
}
