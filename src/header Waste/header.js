import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    PixelRatio //获取高清设备像素比
} from 'react-native';
import styles from './header.style.js';

// 实例化入口
var Header = React.createClass({
    render() {
        return (
          <View style={styles.flex}>
            <View style={styles.container}>
              <View style={[styles.item,styles.center]}>
                <Text style={styles.font}>酒店</Text>
              </View>
              <View style={[styles.item,styles.lineLeftRight]}>
                <View style={[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style={styles.font}>海外酒店</Text>
                </View>
                <View style={[styles.flex,styles.center]}>
                  <Text style={styles.font}>特惠酒店</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.flex,styles.center]}>
                  <Text style={styles.font}>客栈·公寓</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
});


// 注册输出组件
module.exports = Header;
