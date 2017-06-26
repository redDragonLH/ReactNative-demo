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
import { StackNavigator } from 'react-navigation';
import Header from './src/header/header';
import List from './src/list/list';
import ImportantNews from './src/importantNews/importantNews';
// import NList from './src/nvlist/nvlist.js';
class myapp extends React.Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
        <List title="宇航员宇航员宇航员宇航员"></List>
        <List title="宇航员宇航员宇航员宇航员"></List>
        <List title="宇航员宇航员宇航员宇航员"></List>
        <ImportantNews news={[
          '1、三体三体三体三体三体三体三体三体三体三体三体三体三体三体三体',
          '2、京津冀京津冀2、京津冀2、京津冀',
          '3、好奇宝宝好奇宝宝好奇宝宝好奇宝宝好奇宝宝',
          '4、人民邮电人民邮电人民邮电人民邮电'
        ]}></ImportantNews>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    flex: {
        flex:1,
    },
});

AppRegistry.registerComponent('myapp', () => myapp);
