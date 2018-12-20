import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';
import Home from './view/home/index'
export default class MyScene extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#fb8623', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text >去你吗的</Text>
        <Home/>
      </View>
    )
  }
}
