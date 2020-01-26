import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Content, Card, CardItem, Body, Text, Button} from 'native-base';
import Footers from '../Footers';

export default class Category extends Component {
  static navigationOptions = {headerShown: false};
  render() {
    return (
      <View style={{flex: 1}}>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                style={{height: 200, width: null, flex: 1}}
                source={{
                  uri:
                    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Title</Text>
                <Text note>Keterangan</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <Text style={{margin: 10}}>Category</Text>

        <Content horizontal>
          <Button style={{margin: 10}}>
            <Text>Category</Text>
          </Button>
        </Content>

        <Footers />
      </View>
    );
  }
}
