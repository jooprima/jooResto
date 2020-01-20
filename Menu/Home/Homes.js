import React, {Component} from 'react';
import {View, Text} from 'native-base';
import Footers from '../Footers.js';
import ImageSlider from 'react-native-image-slider';

export default class Homes extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ImageSlider images={this.state.images} />
        </View>
        <Footers />
      </View>
    );
  }
}
