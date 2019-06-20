import React, { Component } from "react";

import { Container, Content, Header, Body, Title, Button, Text } from 'native-base'; //https://docs.nativebase.io/Components.html#footer-tabs-def-headref
import { SearchBar } from 'react-native-elements'; //https://react-native-training.github.io/react-native-elements/docs/searchbar.html;
import { Image } from 'react-native-elements';

import { createStore } from 'redux'
// import todoApp from '../util/reducers'
// const store = createStore(todoApp)

class homeScreen extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      search: '',
      counter: 0
    };
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) }
    });
    this.setState({ items });
  }

  render() {
    const { search } = this.state;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Test</Title>
          </Body>
          <Text>{this.state.counter}</Text>
        </Header>
        <Content>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Button onPress={() => this.increaseCounter()}>
            <Text>Test</Text>
          </Button>
          <Image
            source={{ uri: 'https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif' }}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{ uri: 'https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif' }}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{ uri: 'https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif' }}
            style={{ width: 200, height: 200 }}
          />
        </Content>
      </Container>
      // <AppTabNavigator />
    );
  }


  updateSearch = search => {
    this.setState({ search });
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

}


export default homeScreen;
