import React, {Component} from 'react';
import {Container, ScrollableTab, Tab, Tabs} from 'native-base';
import RestaurantKota from './RestaurantKota';
import Footers from '../Footers';

export default class Kota extends Component {
  static navigationOptions = {headerShown: false};
  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Jakarta">
            <RestaurantKota nama="Jakarta" />
          </Tab>
          <Tab heading="Bandung">
            <RestaurantKota nama="Bandung" />
          </Tab>
          <Tab heading="Bali">
            <RestaurantKota nama="Bali" />
          </Tab>
        </Tabs>

        <Footers />
      </Container>
    );
  }
}
