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
            <Icon name="camera" />
            <Text>Makanan</Text>
          </Button>
          <Button vertical active>
            <Icon active name="navigate" />
            <Text>Kota</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Kategori</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
