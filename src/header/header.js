import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from './header.style.js';

// 实例化入口
var Header = React.createClass({
    render() {
        return (
          <View style={styles.flex}>
            <Text style={styles.font}>
              <Text style={styles.font_1}>網易</Text>
              <Text style={styles.font_2}>新闻</Text>
              <Text>有态度°</Text>
            </Text>
          </View>
        );
    }
});


// 注册输出组件
module.exports = Header;
