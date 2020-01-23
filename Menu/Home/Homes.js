import React, {Component} from 'react';
import {View, Text} from 'native-base';
import Footers from '../Footers.js';
import ImageSlider from 'react-native-image-slider';
import {StatusBar} from 'react-native';

export default class Homes extends Component {
  constructor() {
    super();
    this.state = {
      image: [
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
    };
  }

  static navigationOptions = {headerShown: false};

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#46ebf9" />
        <View style={{height: 150}}>
          <ImageSlider images={this.state.image} autoPlayWithInterval={3000} />
        </View>
        <Footers />
      </View>
    );
  }
}
