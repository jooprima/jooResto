import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Footers from './Footers';
import Axios from 'axios';
import {Text, Content, Card, CardItem, Left, Icon, Right} from 'native-base';

var res_id = '';
export default class Restaurant extends Component {
  static navigationOptions = ({navigation}) => {
    res_id = navigation.getParam('res_id');
    return {
      title: navigation.getParam('nama_restaurant'),
    };
  };

  constructor() {
    super();
    this.state = {
      detailRestaurant: [],
    };
  }

  getDetailRestaurant() {
    Axios.get(
      `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}`,
      {
        headers: {'user-key': '5c972128958a1988ac8af0f259c58e85'},
      },
    ).then(res => {
      this.setState({
        detailRestaurant: res.data,
      });
    });
  }

  componentDidMount() {
    this.getDetailRestaurant();
  }

  render() {
    var alamat = {...this.state.detailRestaurant.location};
    var rating = {...this.state.detailRestaurant.user_rating};
    return (
      <View style={{flex: 1}}>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                style={{height: 240, width: null, flex: 1}}
                source={{
                  uri: this.state.detailRestaurant.featured_image,
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Alamat Restaurant : {alamat.address} </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="star" style={{backgroundColor: 'yellow'}} />
                <Text>{rating.aggregate_rating}</Text>
              </Left>
              <Right>
                <Icon name="chatbubbles" />
                <Text> {this.state.detailRestaurant.all_reviews_count} </Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Text>
                  Jenis Masakan : {this.state.detailRestaurant.cuisines}
                </Text>
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
