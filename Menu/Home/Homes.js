import React, {Component} from 'react';
import {
  Text,
  Content,
  Button,
  Card,
  CardItem,
  Left,
  Icon,
  Right,
} from 'native-base';
import Footers from '../Footers.js';
import ImageSlider from 'react-native-image-slider';
import {StatusBar, Image, View} from 'react-native';
import Axios from 'axios';

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
      dataKategori: [],
      dataRestaurant: [],
    };
  }

  static navigationOptions = {headerShown: false};

  getDataKategori = () => {
    Axios.get('https://developers.zomato.com/api/v2.1/categories', {
      headers: {'user-key': '5c972128958a1988ac8af0f259c58e85'},
    }).then(res => {
      this.setState({
        dataKategori: res.data.categories,
      });
    });
  };

  getDataRestaurant = () => {
    Axios.get(
      'https://developers.zomato.com/api/v2.1/search?start=6&count=10&sort=rating',
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
    this.getDataKategori();
    this.getDataRestaurant();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#7457e8" />

        {/* ImageSlider */}
        <Content>
          <View style={{height: 150}}>
            <ImageSlider
              images={this.state.image}
              autoPlayWithInterval={3000}
            />
          </View>

          {/* Kategori */}
          <Text style={{marginTop: 20, marginLeft: 10}}>Pilihan Kategori</Text>
          <Content style={{marginTop: 20}} horizontal>
            {this.state.dataKategori.map((data, key) => {
              return (
                <Button rounded key={key} style={{margin: 5}}>
                  <Text>{data.categories.name}</Text>
                </Button>
              );
            })}
          </Content>

          {/* Restoran terbaik */}
          <Text style={{marginTop: 20, marginLeft: 20}}>
            Restaurant Terbaik
          </Text>

          {this.state.dataRestaurant.map((data, key) => {
            var image = '';
            if (data.restaurant.thumb === '') {
              image =
                'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
            } else {
              image = data.restaurant.thumb;
            }
            return (
              <Card key={key}>
                <CardItem>
                  <Text>{data.restaurant.name}</Text>
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
                    <Icon name="star" style={{color:'#f2ed0d'}} />
                    <Text>{data.restaurant.user_rating.aggregate_rating}</Text>
                  </Left>
                  <Right>
                    <Text>{data.restaurant.user_rating.rating_text}</Text>
                  </Right>
                </CardItem>
              </Card>
            );
          })}
        </Content>
        <Footers />
      </View>
    );
  }
}
