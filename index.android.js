/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 var Header = require('./src/header');
export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
AppRegistry.registerComponent('myapp', () => myapp);
