import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
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
import Axios from 'axios';

export default class Masakan extends Component {
  static navigationOptions = {headerShown: false};

  constructor() {
    super();
    this.state = {
      jenisMasakan: [],
      dataRestaurant: [],
    };
  }

  getJenisMasakan = () => {
    Axios.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=74', {
      headers: {'user-key': '5c972128958a1988ac8af0f259c58e85'},
    }).then(res => {
      this.setState({
        jenisMasakan: res.data.cuisines,
      });
    });
  };

  getDataRestaurant = () => {
    Axios.get(
      'https://developers.zomato.com/api/v2.1/search?start=30&count=10',
      {
        headers: {'user-key': '5c972128958a1988ac8af0f259c58e85'},
      },
    ).then(res => {
      this.setState({
        dataRestaurant: res.data.restaurants,
      });
    });
  };

  componentDidMount() {
    this.getJenisMasakan();
    this.getDataRestaurant();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Content>
          <Text style={{marginTop: 20, marginLeft: 10}}>Jenis Masakan</Text>
          <Content horizontal style={{marginTop: 20, marginLeft: 10}}>
            {this.state.jenisMasakan.map((data, key) => {
              return (
                <View key={key}>
                  <Button
                    style={{margin: 10, backgroundColor: '#ad481c'}}
                    rounded>
                    <Text>{data.cuisine.cuisine_name}</Text>
                  </Button>
                </View>
              );
            })}
          </Content>
          <Text style={{marginTop: 20, marginLeft: 10}}>Restaurant</Text>
          <Content horizontal style={{marginTop: 20, marginLeft: 10}}>
            {this.state.dataRestaurant.map((data, key) => {
              var image = '';
              if (data.restaurant.thumb === '') {
                image =
                  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
              } else {
                image = data.restaurant.thumb;
              }
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    this.props.navigation.navigate('Restaurant', {
                      nama_restaurant: data.restaurant.name,
                      res_id: data.restaurant.R.res_id,
                    });
                  }}>
                  <Card style={{width: 300}}>
                    <CardItem>
                      <Left>
                        <Text>{data.restaurant.name}</Text>
                      </Left>
                      <Right>
                        <Icon name="home" />
                      </Right>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        style={{height: 200, width: null, flex: 1}}
                        source={{
                          uri: image,
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Jenis Masakan</Text>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text> {data.restaurant.cuisines} </Text>
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </Content>
        </Content>
        <Footers />
      </View>
    );
  }
}
