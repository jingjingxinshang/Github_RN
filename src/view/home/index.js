import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
  static defaultProps = {
    title: 'Home'
  };

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}
