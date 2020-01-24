import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text, Content, Card, CardItem, Left, Icon, Right} from 'native-base';
import Footers from './Footers';

export default class Restaurant extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('nama_restaurant'),
    };
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                style={{height: 240, width: null, flex: 1}}
                source={{
                  uri:
                    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Alamat Restaurant</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="star" style={{backgroundColor: 'yellow'}} />
                <Text>46</Text>
              </Left>
              <Right>
                <Icon name="chatbubbles" />
                <Text>2</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Text>Jenis Masakan :</Text>
              </Left>
            </CardItem>
          </Card>
        </Content>

        {/* Footer */}
        <Footers />
      </View>
    );
  }
}
