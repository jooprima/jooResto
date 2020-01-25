import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import {Content, Card, CardItem} from 'native-base';

export default class RestaurantKota extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>Nama Restaurant</Text>
            <Text note> {this.props.nama} </Text>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{height: 250, width: null, flex: 1}}
              source={{
                uri:
                  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }
}
