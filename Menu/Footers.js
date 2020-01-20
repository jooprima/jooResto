import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="pizza" />
            <Text>Masakan</Text>
          </Button>
          <Button vertical>
            <Icon active name="home" />
            <Text>Kota</Text>
          </Button>
          <Button vertical>
            <Icon name="grid" />
            <Text>Kategori</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
