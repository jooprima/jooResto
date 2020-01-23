import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {
  Text,
  Content,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
} from 'native-base';
import Footers from '../Footers';

export default class Masakan extends Component {
  static navigationOptions = {headerShown: false};

  render() {
    return (
      <View style={{flex: 1}}>
        <Content>
          <Text style={{marginTop: 20, marginLeft: 10}}>Jenis Masakan</Text>
          <Content horizontal style={{marginTop: 20, marginLeft: 10}}>
            <Button>
              <Text>Masakan Jawa</Text>
            </Button>
          </Content>
          <Text style={{marginTop: 20, marginLeft: 10}}>Restaurant</Text>
          <Content horizontal style={{marginTop: 20, marginLeft: 10}}>
            <Card>
              <CardItem>
                <Left>
                  <Text>Nama Restaurant</Text>
                </Left>
                <Right>
                  <Icon name="home" />
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{height: 200, width: null, flex: 1}}
                  source={{
                    uri:
                      'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Jenis Masakan</Text>
                </Left>
                <Right>
                  <Text>Alamat</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Content>
        <Footers />
      </View>
    );
  }
}
